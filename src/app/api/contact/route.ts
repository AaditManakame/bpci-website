import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  "http://localhost:3000",
  "https://bpci-website.vercel.app",
];

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request origin.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const product = String(body.product || "").trim();
    const message = String(body.message || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot: legitimate users never see or fill this field.
    // Bots that populate it are silently treated as successful.
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been sent successfully.",
      });
    }

    if (!name || !phone || !email || !product || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "BPCI Website <onboarding@resend.dev>",
      to: ["bpcibangalore@gmail.com"],
      replyTo: email,
      subject: `New Product Enquiry — ${product}`,
      text: `
New enquiry received through the BPCI website.

Name: ${name}
Company: ${company || "Not provided"}
Phone: ${phone}
Email: ${email}
Product: ${product}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}