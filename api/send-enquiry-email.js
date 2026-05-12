const requiredFields = [
  "name",
  "phone",
  "email",
  "serviceInterested",
  "projectType",
  "budgetRange",
  "message",
];

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const verifyTurnstile = async (token, ip) => {
  if (!process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
    return { success: false, error: "Turnstile secret key is not configured." };
  }

  const body = new URLSearchParams();
  body.append("secret", process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY);
  body.append("response", token || "");
  if (ip) body.append("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });

  return response.json();
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { enquiry, turnstileToken } = request.body || {};

    if (!enquiry || requiredFields.some((field) => !String(enquiry[field] || "").trim())) {
      return response.status(400).json({ error: "Missing enquiry details." });
    }

    const ip =
      request.headers["x-forwarded-for"]?.split(",")[0] ||
      request.headers["x-real-ip"] ||
      request.socket?.remoteAddress;

    const verification = await verifyTurnstile(turnstileToken, ip);
    if (!verification.success) {
      return response.status(403).json({ error: "CAPTCHA verification failed." });
    }

    if (!process.env.RESEND_API_KEY || !process.env.OWNER_EMAIL || !process.env.FROM_EMAIL) {
      return response.status(500).json({ error: "Email environment variables are not configured." });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
        <h2>New VK Constructions Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
        <p><strong>Service Interested:</strong> ${escapeHtml(enquiry.serviceInterested)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(enquiry.projectType)}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(enquiry.budgetRange)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(enquiry.message).replaceAll("\n", "<br/>")}</p>
        <p><strong>Source:</strong> website</p>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL,
        to: process.env.OWNER_EMAIL,
        reply_to: enquiry.email,
        subject: `New enquiry from ${enquiry.name} | VK Constructions`,
        html,
      }),
    });

    const emailResult = await emailResponse.json().catch(() => ({}));
    if (!emailResponse.ok) {
      return response.status(502).json({ error: emailResult.message || "Email provider rejected the message." });
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message || "Unexpected email error." });
  }
}
