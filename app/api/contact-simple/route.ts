import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phone, message, serviceType } = body;

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Nhu Media Studio <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      subject: `New ${serviceType} Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #709BA3; border-bottom: 2px solid #709BA3; padding-bottom: 10px; margin-bottom: 20px;">
            New ${serviceType} Inquiry
          </h2>
          
          <div style="background-color: #f8f8f8; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Business:</strong> ${businessName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #709BA3;">${email}</a></p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding: 15px; background-color: #709BA3; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              Reply to: <a href="mailto:${email}" style="color: white; text-decoration: underline;">${email}</a>
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}

