import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honey?: string;
}

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    // Honeypot spam check
    if (body._honey) {
      return NextResponse.json({ success: true });
    }

    const errors: Record<string, string> = {};

    if (!body.name?.trim()) {
      errors.name = "Full name is required.";
    }

    if (!body.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!body.subject?.trim()) {
      errors.subject = "Subject is required.";
    }

    if (!body.message?.trim()) {
      errors.message = "Message is required.";
    } else if (body.message.trim().length < MIN_MESSAGE_LENGTH) {
      errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    } else if (body.message.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Connect an email service here (e.g. SendGrid, Resend, Nodemailer).
    // Example with Resend:
    //   await resend.emails.send({
    //     from: "portfolio@yourdomain.com",
    //     to: "prasoon@example.com",
    //     subject: `Portfolio Contact: ${body.subject}`,
    //     text: `From: ${body.name} (${body.email})\n\n${body.message}`,
    //   });

    // Simulate processing delay
    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
