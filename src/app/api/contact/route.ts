import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, role, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailSubject = subject ? `Portfolio Contact: ${subject}` : `New message from ${name}`;
    const emailBody = `
      Name: ${name}
      Email: ${email}
      Role: ${role || 'Not provided'}
      
      Message:
      ${message}
    `;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'ganathavinash.gr@gmail.com', // Replace with the actual email you want to receive messages on
      subject: emailSubject,
      replyTo: email,
      text: emailBody,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ 
        error: "Failed to send email", 
        details: error.message || "Resend rejected the request" 
      }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend Error:", error);
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error.message || error.name || "Unknown error" 
    }, { status: 500 });
  }
}
