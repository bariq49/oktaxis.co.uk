import { NextRequest, NextResponse } from 'next/server';
import sendEmail from '@/lib/sendEmail'; // Ensure this path is correct

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { passengerInfo, bookingDetails } = body;

  try {
    // Send email to the admin
    await sendEmail({
      to: 'admin@yourdomain.com',
      subject: 'New Booking Confirmation',
      html: `
        <h3>New Booking Received</h3>
        <p><b>Name:</b> ${passengerInfo.name}</p>
        <p><b>Email:</b> ${passengerInfo.email}</p>
        <p><b>Phone:</b> ${passengerInfo.phone}</p>
        <p><b>Pickup Address:</b> ${bookingDetails.pickUpAddress}</p>
        <p><b>Drop-off Address:</b> ${bookingDetails.dropOffAddress}</p>
        <p><b>Date:</b> ${bookingDetails.date}</p>
        <p><b>Time:</b> ${bookingDetails.time}</p>
      `,
    });

    // Send email to the user
    await sendEmail({
      to: passengerInfo.email,
      subject: 'Booking Confirmation',
      html: `
        <h3>Thank you for your booking, ${passengerInfo.name}</h3>
        <p>Your booking has been confirmed. Here are the details:</p>
        <p><b>Pickup Address:</b> ${bookingDetails.pickUpAddress}</p>
        <p><b>Drop-off Address:</b> ${bookingDetails.dropOffAddress}</p>
        <p><b>Date:</b> ${bookingDetails.date}</p>
        <p><b>Time:</b> ${bookingDetails.time}</p>
        <p>We look forward to serving you.</p>
      `,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Failed to send emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}
