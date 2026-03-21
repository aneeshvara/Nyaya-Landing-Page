import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nyaya Contact Form" <${process.env.GMAIL_USER}>`,
      to: "infonyaya.law@gmail.com",
      replyTo: email,
      subject: `New Message from ${name} via Nyaya`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A1128; border-bottom: 2px solid #B89F6B; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #2E8B9F; margin: 0; padding: 12px 16px; background: #f5f5f5; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </blockquote>
          <hr style="margin-top: 24px; border-color: #eee;" />
          <p style="color: #888; font-size: 12px;">Sent from the Nyaya landing page contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
