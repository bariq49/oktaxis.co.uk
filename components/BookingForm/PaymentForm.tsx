"use client";
import { processSquarePayment } from "@/actions/accept-payment";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
interface PaymentResponse {
  details: {
    billing: {
      postalCode: string;
    };
    card: {
      brand: string;
      expMonth: number;
      expYear: number;
      last4: string;
    };
    method: string;
  };
  status: string;
  token: string;
}

export interface PaymentFormFields {
    name: string;
    stop_1?: string;
    stop_2?: string;
    stop_3?: string;
    pickup_date: Date;
    pickup_time: { hour: number; minute: number; period: "AM" | "PM" };
    pickup_location: string;
    dropoff_location: string;
    passengers: number;
    childs: number;
    bags: number;
    email?: string;
    phone?: string;
    flight?: string;
    payment_id?: string;
  }
  


function MyPaymentForm({ amount, form, setPaymentDone }: { form: UseFormReturn<PaymentFormFields>, amount: number, setPaymentDone: Dispatch<SetStateAction<boolean>> }) {
  const [error, setError] = useState('')

  return (
    <div className="mt-5 w-full flex flex-col gap-5">

      <PaymentForm
      applicationId="sq0idp-UScAl68JE4C7e3QTBxt-VQ"
      locationId="LAV5G921YMBBH"

      cardTokenizeResponseReceived={async (token: PaymentResponse) => {
        console.log("Token received:", token);
        setError('')
        const res = await processSquarePayment({ amount, sourceId: token.token })
        if (!res.success) {
          setError('Pay Failled')
          return;
        }

        form.setValue('payment_id', res.paymentId)
        setPaymentDone(true)
      }}
      >
      <CreditCard
        buttonProps={{
          css: {
            backgroundColor: "#000000",
            fontSize: "14px",
            color: "#fff",

            "&:hover": {
              backgroundColor: "#28282B",
              color: "#fff",

            },

          },
        }}
      />
    </PaymentForm> 
     
      { error && <div className="text-red-500 text-center">{error}</div> }
    </div >
  );
}

export default MyPaymentForm;
