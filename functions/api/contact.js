// functions/api/contact.js

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function clean(s, max = 4000) {
  if (typeof s !== "string") return "";
  return s.replace(/\s+/g, " ").trim().slice(0, max);
}

// Very light anti-bot: reject if honeypot filled
function isHoneypotTripped(body) {
  return typeof body?.company === "string" && body.company.trim().length > 0;
}

export async function onRequestPost({ request, env }) {
  // Only allow JSON
  const ct = request.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    return json({ error: "Fel format. Skicka JSON." }, 415);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Ogiltig JSON." }, 400);
  }

  if (isHoneypotTripped(body)) {
    // Pretend success to bots
    return json({ ok: true });
  }

  const name = clean(body?.name, 120);
  const email = clean(body?.email, 200);
  const phone = clean(body?.phone, 60);
  const message = clean(body?.message, 4000);

  if (!name) return json({ error: "Namn saknas." }, 400);
  if (!isEmail(email)) return json({ error: "Ogiltig e-postadress." }, 400);
  if (!message) return json({ error: "Meddelande saknas." }, 400);

  // Provider config
  const resendKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = "onboarding@resend.dev";

  if (!resendKey || !toEmail) {
    return json(
      { error: "E-postleverantör är inte konfigurerad (saknar RESEND_API_KEY eller CONTACT_TO_EMAIL)." },
      501
    );
  }

  const subject = `Ny förfrågan från ${name}`;
  const text =
    `Namn: ${name}\n` +
    `E-post: ${email}\n` +
    (phone ? `Telefon: ${phone}\n` : "") +
    `\nMeddelande:\n${message}\n`;

    return json({
      debug: {
        fromEmail,
        toEmail,
        resendKeyExists: Boolean(resendKey)
      }
    }, 200);

  // Send via Resend
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      reply_to: email,
      text,
    }),
  });

  if (!resp.ok) {
    const details = await resp.text().catch(() => "");
    return json({ error: "Kunde inte skicka meddelandet.", details }, 502);
  }

  return json({ ok: true, version: "v1-failsafe" });
}

// Optional: handle OPTIONS for CORS if you ever call from another domain
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}