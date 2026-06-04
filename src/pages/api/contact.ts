import type { APIRoute } from "astro";

// Endpoint serverless (Vercel function). Non pre-renderizzato.
export const prerender = false;

const TO = "viaroma284@gmail.com";
const FROM = "Roma284 <noreply@roma284.it>"; // dominio da verificare su Resend

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400);
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const honeypot = String(payload.company ?? "").trim(); // anti-spam

  if (honeypot) return json({ ok: true }); // bot: fingiamo successo
  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "missing_fields" }, 422);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    // Chiave non configurata: lo segnaliamo senza crashare.
    return json({ ok: false, error: "email_not_configured" }, 503);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Nuovo messaggio dal sito — ${name}`,
      text: `Da: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return json({ ok: false, error: "send_failed" }, 502);
  }
  return json({ ok: true });
};
