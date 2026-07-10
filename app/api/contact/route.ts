import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper: basic HTML-escape to prevent injection in email body
function esc(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, interest, message, source } = body as {
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    message?: string;
    source?: string; // "contact" | "sales"
  };

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465, // CHANGE TO 465
    secure: true, // CHANGE TO TRUE
    auth: { user, pass },
  });

  const pageLabel =
    source === "sales"
      ? "Sales Page — Investment Consultation"
      : "Contact Page";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#fbf9f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fbf9f4;padding:24px 0;">
    <tr>
      <td align="center">
        <!-- Outer card -->
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e4dcc8;">

          <!-- Header -->
          <tr>
            <td style="background:#1c1814;padding:28px 32px;">
              <p style="margin:0;color:#d7a85a;font-size:18px;font-weight:700;letter-spacing:0.04em;">Lorenzo Homes — New Enquiry</p>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.5);font-size:12px;">Received via ${esc(pageLabel)}</p>
            </td>
          </tr>

          <!-- Body rows -->
          <tr>
            <td style="padding:8px 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <tr style="border-bottom:1px solid #f3eee3;">
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Name</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${esc(name)}</td>
                </tr>

                <tr style="border-bottom:1px solid #f3eee3;">
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Email</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;"><a href="mailto:${esc(email)}" style="color:#b8842f;text-decoration:none;">${esc(email)}</a></td>
                </tr>

                <tr style="border-bottom:1px solid #f3eee3;">
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Phone / WhatsApp</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${esc(phone || "—")}</td>
                </tr>

                <tr${message?.trim() ? ' style="border-bottom:1px solid #f3eee3;"' : ""}>
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Interested in</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${esc(interest || "—")}</td>
                </tr>

                ${
                  message?.trim()
                    ? `
                <tr>
                  <td colspan="2" style="padding:0 0 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:#f3eee3;border-radius:6px;padding:14px 16px;font-size:13px;color:#322b23;line-height:1.6;">${esc(message)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>`
                    : ""
                }

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3eee3;padding:14px 32px;font-size:12px;color:#a9824f;">Lorenzo Homes &middot; Orchid Road, Lekki &middot; lorenzohomesonline.com</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = [
    `New Enquiry — Lorenzo Homes (${pageLabel})`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "—"}`,
    `Interest: ${interest || "—"}`,
    `Message:  ${message || "—"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Lorenzo Homes Website" <${user}>`,
      to: "m360solutionsgroup@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${interest || "Website Contact"}`,
      html,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
