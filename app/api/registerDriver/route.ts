import { NextRequest, NextResponse } from 'next/server';
import sendEmail from '@/lib/sendEmail';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, vehicleType, licenseNumber } = body;

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
          <h2>New Driver Registration</h2>
        </div>
        <div style="${contentStyle}">
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Vehicle Type:</b> ${vehicleType}</p>
          <p><b>License Number:</b> ${licenseNumber}</p>
        </div>
      </div>
    `;

    // Send email to admin
    await sendEmail({
      to: "info@oktaxis.co.uk",
      subject: 'New Driver Registration',
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
          <p>Thank you for registering as a driver with OkaTaxis. Your details have been successfully received.</p>
          <p>We will review your application and get back to you shortly.</p>
          <p>Best regards,<br>The OkaTaxis Team</p>
        </div>
      </div>
    `;

    // Send email to user
    await sendEmail({
      to: email,
      subject: 'Driver Registration Confirmation',
      html: userEmailContent,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Failed to send emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}