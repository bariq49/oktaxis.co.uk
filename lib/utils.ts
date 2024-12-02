import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Step:1 Add User's Form Data here to Send Booking email...
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
          bookingType: values.bookingType,
          flightNumber: values.flightNumber,
          vehicleTitle: values.selectedVehicle,
          vehicleType: values.vehicleType,
          category: values.category,
          passengerCount: values.passengerCount,
          bagCount: values.bagCount,
          childCount: values.childCount,
          textarea: values.textarea,
          stops: values.stops,
          hourly: values.hourlyCharter,
          distance: values.distance,
          price:values.totalPrice,


        },
      
      }),
    });


    if (!response.ok) {
      const errorMessage = await response.json();
      console.error('Failed to send emails. Server response:', errorMessage);
      throw new Error(errorMessage.message || 'Unknown server error');
    }

    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error.message);
    throw error; 
  }
};

