import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, website, monthlyBudget, services, message, serviceType = 'General Inquiry' } = body;

    // Check if Resend API key is set
    console.log('🔍 Checking Resend API key...');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ Missing Resend API key!');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact us directly at nhumediastudio@gmail.com.' 
        },
        { status: 503 }
      );
    }

    // Check if recipient email is set
    if (!process.env.CONTACT_EMAIL) {
      console.error('❌ Missing contact email!');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact us directly at nhumediastudio@gmail.com.' 
        },
        { status: 503 }
      );
    }

    console.log('✅ Resend API key found, creating client...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    console.log('📧 Attempting to send email via Resend...');
    try {
      const { data, error } = await resend.emails.send({
        from: 'Nhu Media Studio <onboarding@resend.dev>', // Will change after domain setup
        to: [process.env.CONTACT_EMAIL!],
        subject: `New ${serviceType} Lead: ${businessName || name} - ${monthlyBudget || 'Budget Not Specified'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #709BA3; border-bottom: 3px solid #709BA3; padding-bottom: 10px;">
              New ${serviceType} Inquiry
            </h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Business:</strong> ${businessName || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Website:</strong> ${website || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong>Budget:</strong> <span style="color: #709BA3; font-weight: bold;">${monthlyBudget || 'Not specified'}</span></p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Services Interested In:</h3>
              <ul style="line-height: 1.8; color: #4b5563;">
                ${services.map((service: string) => `<li>${service}</li>`).join('')}
              </ul>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="line-height: 1.6; color: #4b5563;">${message || 'No message provided'}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #709BA3; color: white; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Quick Actions:</strong><br>
                Reply to: <a href="mailto:${email}" style="color: white; text-decoration: underline;">${email}</a>
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the Nhu Media Studio contact form.</p>
              <p>Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })} EST</p>
            </div>
          </div>
        `,
        replyTo: email, // Allow replying directly to the customer
      });

      if (error) {
        console.error('❌ Resend API error:', error);
        return NextResponse.json(
          { 
            success: false, 
            message: 'Failed to send email. Please contact us at nhumediastudio@gmail.com.',
            error: error.message
          },
          { status: 500 }
        );
      }

      console.log('✅ Email sent successfully via Resend!', data);
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('❌ Email send error:', emailError);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please contact us at hello@nhumediastudio.com.',
          error: emailError?.message || 'UNKNOWN'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}

