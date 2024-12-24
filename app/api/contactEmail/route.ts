import { NextRequest, NextResponse } from 'next/server';
import sendEmail from '@/lib/sendEmail';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  const commonStyles = `
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  `;

  const headerStyle = `
    background-color: #1f2937; 
    color: white;
    padding: 20px;
    text-align: center;
  `;

  const contentStyle = `
    background-color: #f9f9f9;
    padding: 20px;
  `;

  try {
    // Admin Email Content
    const adminEmailContent = `
      <div style="${commonStyles}">
        <div style="${headerStyle}">
          <h2>Customer Contact Information</h2>
        </div>
        <div style="${contentStyle}">
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
          
        </div>
      </div>
    `;

    // Send email to admin
    await sendEmail({
      to: "info@oktaxis.co.uk",
      subject: 'Customer Contact Information',
      html: adminEmailContent,
    });

    // User Email Content
    const userEmailContent = `
      <div style="${commonStyles}">
        <div style="${headerStyle}">
          <h2>Welcome to OkaTaxis</h2>
        </div>
        <div style="${contentStyle}">
          <p>Dear ${name},</p>
          <p>Thank you for contacting with OkaTaxis. Your contact information have been successfully received.</p>
          <p>We will get back to you shortly.</p>
          <p>Best regards,<br>The OkaTaxis Team</p>
        </div>
      </div>
    `;

    // Send email to user
    await sendEmail({
      to: email,
      subject: 'Customer Contact Information',
      html: userEmailContent,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Failed to send emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}