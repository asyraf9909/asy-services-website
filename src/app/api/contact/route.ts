import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  type?: string;
  budget?: string;
  message?: string;
  trap?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Bot trap: pretend success, do nothing.
  if (body.trap) return NextResponse.json({ ok: true, transport: "none" });

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 160);
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Invalid fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "ASY Services <onboarding@resend.dev>";

  // No provider configured yet — the client falls back to a mailto draft so the
  // enquiry is never silently lost.
  if (!apiKey || !to) {
    console.warn("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set; using mailto fallback");
    return NextResponse.json({ ok: true, transport: "mailto" });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", (body.company ?? "—").trim() || "—"],
    ["Project type", (body.type ?? "—").trim()],
    ["Budget", (body.budget ?? "—").trim()],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:600px">
      <h2 style="margin:0 0 16px;font-size:18px">New project enquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <hr style="margin:18px 0;border:none;border-top:1px solid #eee" />
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Project enquiry — ${body.type ?? "website"} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[contact] resend failed", res.status, await res.text());
      return NextResponse.json({ ok: true, transport: "mailto" });
    }

    return NextResponse.json({ ok: true, transport: "email" });
  } catch (err) {
    console.error("[contact] send error", err);
    return NextResponse.json({ ok: true, transport: "mailto" });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c,
  );
}
