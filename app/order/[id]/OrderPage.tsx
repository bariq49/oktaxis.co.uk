'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { getOrderById } from '@/actions/get-order';
import { OrderProps } from '@/types/OrderProps';
import { TbCopy } from "react-icons/tb";
import LogoImage from "@/assets/logo.png"
import Image from 'next/image';

function OrderPage({ id }: { id: string }) {
  const [order, setOrder] = useState<OrderProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchOrder = async () => {

      try {

        const result = await getOrderById(id);
        console.log('result : ', result)
        if (result.status === 200 && result.order) {
          setOrder(result.order);
        } else {
          setError(result.error);
        }
        setLoading(false)
      } catch (err) {
        console.log("error : ", err)
        setError('Failed to fetch the order.');
        setLoading(false)
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);



  if (error) {
    return <div className="text-center py-40 text-2xl text-red-500">{error}</div>;
  }

  if (loading) {
    return <div className="text-center py-40 text-2xl animate-pulse">Loading...</div>;
  }
  if (!order) {
    return <div className="text-center py-40 text-2xl ">Not Found</div>;
  }

  return (
    <div className="bg-black py-28 flex justify-center items-center min-h-screen border-b border-gray-500">

      <div className="max-w-4xl w-full mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-2xl">
        {/* Main Heading */}
        <div className='flex flex-col gap-2 '>

          <h1 className="text-2xl font-semibold text-center mb-8  border border-y border-green-600 py-3 bg-green-600 text-white">
            Order Details
          </h1>
          <div className="flex items-center justify-center mb-8   border-y border-green-600 py-3 w-full">
            <Image src={LogoImage} alt='logo' className='max-h-14 object-contain' />

          </div>
        </div>
        <div className="space-y-6">
          {/* Order Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700">Order ID:</p>
              <div className='flex items-center gap-2'>
                <p className="text-gray-900 font-bold">{order.track_id}</p>
                <TbCopy onClick={() => { navigator.clipboard.writeText(order.id) }} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Price:</p>
              <p className="text-gray-900 font-bold">£{order.price}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Car:</p>
              <p className="text-gray-900 font-bold">{order.car}</p>
            </div>
            {order.distance && (
              <div>
                <p className="font-semibold text-gray-700">Distance:</p>
                <p className="text-gray-900 font-bold">{order.distance} Miles</p>
              </div>
            )}
            <div>
              <p className="font-semibold text-gray-700">Pick-Up Date:</p>
              <p className="text-gray-900 font-bold">
                {new Date(order.pickup_date).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Pick-Up Time:</p>
              <p className="text-gray-900 font-bold">
                {order.pickup_time}
              </p>
            </div>
            {order.return_pickup_date && <div>
              <p className="font-semibold text-gray-700">Return Pick-Up Date:</p>
              <p className="text-gray-900 font-bold">
                {new Date(order.return_pickup_date).toLocaleString()}
              </p>
            </div>}
            {order.return_pickup_time && <div>
              <p className="font-semibold text-gray-700">Retrun Pick-Up Time:</p>
              <p className="text-gray-900 font-bold">
                {order.return_pickup_time}
              </p>
            </div>}
            <div>
              <p className="font-semibold text-gray-700">Pick-Up Location:</p>
              <p className="text-gray-900 font-bold">{order.pickup_location}</p>
            </div>
            {order.stop_1 &&
              <div>
                <p className="font-semibold text-gray-700">Stop 1 Location:</p>
                <p className="text-gray-900 font-bold">{order.stop_1}</p>
              </div>}
            {order.stop_2 &&
              <div>
                <p className="font-semibold text-gray-700">Stop 2 Location:</p>
                <p className="text-gray-900 font-bold">{order.stop_2}</p>
              </div>}
            {order.stop_3 &&
              <div>
                <p className="font-semibold text-gray-700">Stop 3 Location:</p>
                <p className="text-gray-900 font-bold">{order.stop_3}</p>
              </div>}

            <div>
              <p className="font-semibold text-gray-700">Drop-Off Location:</p>
              <p className="text-gray-900 font-bold">{order.dropoff_location}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Passengers:</p>
              <p className="text-gray-900 font-bold">{order.passengers}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-700">Flight Track (7£):</p>
              <p className="text-gray-900 font-bold">{order.flight_track}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Meet & Greet (10£):</p>
              <p className="text-gray-900 font-bold">{order.meet_and_greet ?? 'N/A'}</p>
            </div>
          </div>
          <div className='w-full h-1 bg-black rounded-full'></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700">Name:</p>
              <p className="text-gray-900 font-bold">{order.name}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email:</p>
              <p className="text-gray-900 font-bold">{order.email}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Phone:</p>
              <p className="text-gray-900 font-bold">{order.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Flight:</p>
              <p className="text-gray-900 font-bold">{order.flight}</p>
            </div>
            {order.return_flight && <div>
              <p className="font-semibold text-gray-700">Return Flight:</p>
              <p className="text-gray-900 font-bold">{order.return_flight}</p>
            </div>}
            {order.hours && (
              <div>
                <p className="font-semibold text-gray-700">Duration:</p>
                <p className="text-gray-900 font-bold">
                  {order.hours} hours {order.minutes || 0} minutes
                </p>
              </div>
            )}

            <div>
              <p className="font-semibold text-gray-700">Created At:</p>
              <p className="text-gray-900 font-bold">
                {new Date(order.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default OrderPage;
