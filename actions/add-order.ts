'use server'
import { db } from '@/db/drizzle';
import { orders } from '@/db/schema';
import nodemailer from 'nodemailer';
import { emailConfig } from '@/lib/emailConfig';

export async function createOrder({
  category, price, car, pickup_date, pickup_time , pickup_location, dropoff_location,
  passengers, childs, bags, name, email, phone, flight, hours=null, minutes=null, distance=null,  stop_1=null,
  stop_2=null,
  stop_3=null
}: {
  category: string;
  price: number;
  car: string;
  distance?: number | null; 
  pickup_date: Date;
  pickup_time: string;
  pickup_location: string;
  dropoff_location: string;
  passengers: number;
  childs: number;
  bags: number;
  name: string;
  email: string;
  phone: string;
  flight: string | null;
  hours?: number | null;
  minutes?: number | null;
  stop_1?:string | null,
  stop_2?:string | null,
  stop_3?:string | null
}) {
  try {
    const orderData = {
      category,
      price:price.toString(),
      car,
      distance: distance !== null ? distance.toString() : null, 
      pickup_time,
      pickup_date,
      pickup_location,
      dropoff_location,
      passengers,
      childs,
      bags,
      name,
      email,
      phone,
      flight,
      hours,
      minutes,
      stop_1,
      stop_2,
      stop_3
    };

    const order = await db.insert(orders).values({...orderData}).returning(); 
    if(!order[0] || !order[0].id){
      console.log('order : ',order)
        return { error: 'order not placed due to backend issue', status: 500 };
    }

   
    return { data:order[0], status: 201, error: '' };
  } catch (error) {
    console.error('Error creating order:', error);
    return { error: 'An error occurred while creating the order.', status: 500 };
  }
}
