import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    source?: string;
  };

  if (!name?.trim() || (!email?.trim() && !phone?.trim())) {
    return NextResponse.json(
      { error: "Name and an email or phone number are required." },
      { status: 400 },
    );
  }

  if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const pageLabel =
    source === "sales"
      ? "Sales Page — Investment Consultation (Ads)"
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
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e4dcc8;">

          <!-- Header -->
          <tr>
            <td style="background:#1c1814;padding:28px 32px;">
              <p style="margin:0;color:#d7a85a;font-size:18px;font-weight:700;letter-spacing:0.04em;">Lorenzo Homes &mdash; New Enquiry</p>
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
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${email ? `<a href="mailto:${esc(email)}" style="color:#b8842f;text-decoration:none;">${esc(email)}</a>` : "&mdash;"}</td>
                </tr>

                <tr style="border-bottom:1px solid #f3eee3;">
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Phone / WhatsApp</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${esc(phone || "&mdash;")}</td>
                </tr>

                <tr${message?.trim() ? ' style="border-bottom:1px solid #f3eee3;"' : ""}>
                  <td width="130" style="padding:12px 12px 12px 0;font-size:13px;font-weight:700;color:#a9824f;vertical-align:top;">Interested in</td>
                  <td style="padding:12px 0;font-size:13px;color:#1c1814;vertical-align:top;">${esc(interest || "&mdash;")}</td>
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

  try {
    const data = await resend.emails.send({
      from: "Lorenzo Homes <hello@update.lorenzohomesonline.com>",
      to: "m360solutionsgroup@gmail.com",
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} — ${interest || "Website Contact"}`,
      html,
    });

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
