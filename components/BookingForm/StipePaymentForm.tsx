"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {  useStripe, useElements } from "@stripe/react-stripe-js";
import { processStripePayment } from "@/actions/accept-payment-stripe";
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { BsXCircle } from "react-icons/bs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

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

function CheckoutForm({ amount, form, setPaymentDone }: { form: UseFormReturn<PaymentFormFields>, amount: number, setPaymentDone: Dispatch<SetStateAction<boolean>> }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;
  
    setLoading(true);
    setError("");
  
    // Retrieve each individual card element
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);
  
    // Ensure all elements are present
    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setError("Card details are required");
      setLoading(false);
      return;
    }
  
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement, // Only pass CardNumberElement; Stripe handles the rest
    });
  
    if (error) {
      setError(error.message || "Payment failed");
      setLoading(false);
      return;
    }
  
    const res = await processStripePayment({ amount, paymentMethodId: paymentMethod.id });
    if (!res.success) {
      setError(res.error ?? 'Payment Failed');
      setLoading(false);
      return;
    }
  
    form.setValue("payment_id", res.paymentId);
    setPaymentDone(true);
    setLoading(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="mt-5 w-full flex flex-col gap-5">
       <div>
        <label className="block mb-1 text-sm font-medium">Card Number</label>
        <CardNumberElement className="border p-2 rounded-md w-full" />
       </div>
  
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <label className="block mb-1 text-sm font-medium">Expiration Date</label>
          <CardExpiryElement className="border p-2 rounded-md w-full" />
        </div>

        <div className="">
          <label className="block mb-1 text-sm font-medium">CVC</label>
          <CardCvcElement className="border p-2 rounded-md w-full" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-md disabled:opacity-50"
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : "Pay Now : £ " + amount }
      </button>

      {error && <div className="text-red-500 text-center">{error}</div>}
    </form>
  );
}

function StripePaymentForm({ amount, form, setPaymentDone , setFormDone}: { form: UseFormReturn<PaymentFormFields>, amount: number, setPaymentDone: Dispatch<SetStateAction<boolean>>,setFormDone: Dispatch<SetStateAction<boolean>> }) {
  console.log("amount :: ", amount)
  return (
    <div className="fixed w-full h-full bg-black/40 flex items-center justify-center p-4 left-0 top-0 z-50">
      <div className="bg-white p-4 rounded-md max-w-screen-sm mx-auto w-full relative">
          
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: amount*100 ,
            currency: "eur",
          }}
        >
          <CheckoutForm amount={amount ?? 0} form={form} setPaymentDone={setPaymentDone} />
        </Elements>
        <div onClick={()=>{setFormDone(false)}} className="absolute  top-2 right-2 cursor-pointer">
          <BsXCircle className="text-xl"/>
        </div>
      </div>
    </div>
  );
}

export default StripePaymentForm;
