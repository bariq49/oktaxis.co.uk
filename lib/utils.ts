import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Send Booking email...
export const sendBookingEmail = async (values: any) => {
  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        passengerInfo: values.passengerInfo,
        bookingDetails: {
          pickUpAddress: values.pickUpAddress,
          dropOffAddress: values.dropOffAddress,
          date: values.date,
          time: values.time,
          vehicleType: values.vehicleType,
          passengerCount: values.passengerCount,
          bagCount: values.bagCount,
        },
      }),
    });

    if (response.ok) {
      console.log('Emails sent successfully');
    } else {
      console.error('Failed to send emails');
    }
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

