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
          distance: parseFloat(values.distance).toFixed(2),
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

// Get Data for Register Driver...
export const registerDriverEmail = async (values: any) => {
  try {
    const response = await fetch('/api/registerDriver', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        vehicleType: values.vehicleType,
        licenseNumber: values.licenseNumber,
      })
    })

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
}

export const contactEmail = async (values: any) => {
  try {
    const response = await fetch('/api/contactEmail', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })
    })

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
}
