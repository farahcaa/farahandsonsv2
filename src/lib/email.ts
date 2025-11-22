/**
 * Sends a seller-lead email via your backend.
 *
 * Usage:
 *   await sendEmail({
 *     name: "Chris",
 *     email: "test@test.com",
 *     phone: "123",
 *     address: "123 Ave",
 *     message: "Hey",
 *   });
 */
export async function sendEmail({
  name,
  email,
  message,
  apiUrl = (import.meta as any).env.VITE_EMAIL_API_URL ??
    "https://util-api.chris-farah.com/api/email/send",
  clientId = "farahandsons",
  clientSecret = "farahandsons",
}) {
  const payload = {
    clientId,
    clientSecret,
    subject: `New Inquiry From ${name || "Unknown"}`,
    bodyText: `
New Inquiry from Farahandsons.com

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim(),
    bodyHtml: `
      <h2>New seller lead from Farah Property website</h2>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { status: "error", message: `Failed: ${res.status} ${text}` };
    }

    const data = await res.json().catch(() => ({}));
    return { status: "ok", message: data?.status ?? "Email sent" };
  } catch (err) {
    return { status: "error", message: err?.message ?? "Unknown error" };
  }
}
