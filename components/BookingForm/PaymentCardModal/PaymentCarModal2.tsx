"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"

function convertToSubcurrency(amount: number, factor = 100) {
    return Math.round(amount * factor);
  }
  
  
interface PaymentCardModalProps {
    onClose: () => void;
  }
  
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  )
  
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    console.warn("Stripe publishable key is missing. Check your environment variables.");
  }
  

const CheckoutForm2 = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState<any | null>(null);
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    // Create Payment Intent on load
    // fetch("/api/create-payment", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setClientSecret(data.clientSecret);
        
    //     if (stripe) {
    //       const pr = stripe.paymentRequest({
    //         country: "DE",
    //         currency: "eur",
    //         total: { label: "Total", amount: convertToSubcurrency(amount) },
    //         requestPayerName: true,
    //         requestPayerEmail: true,
    //       });
          
    //       pr.canMakePayment().then((result) => {
    //         if (result) setPaymentRequest(pr);
    //       });
    //     }
    //   });
  }, [ stripe]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          
          if (stripe) {
            const pr = stripe.paymentRequest({
              country: "DE",
              currency: "eur",
              total: { label: "Total", amount: convertToSubcurrency(amount) },
              requestPayerName: true,
              requestPayerEmail: true,
            });
            
            pr.canMakePayment().then((result) => {
              if (result) setPaymentRequest(pr);
            });
          }
        });
    setLoading(true);

    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const link = `${window.location.href}?paymentId=${clientSecret}`;
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: { return_url: link },
    });

    if (error) setErrorMessage(error.message);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {paymentRequest && (
        <PaymentRequestButtonElement
          options={{ paymentRequest }}
          onClick={() => setLoading(true)}
        />
      )}
      {clientSecret && <PaymentElement />}
      <input type="number" placeholder="amount" className="p-2 border focus:outline-none rounded-md" value={amount} onChange={(e)=>{if(isNaN(Number(e.target.value))){return;} setAmount(Number(e.target.value))}}/>
      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-blue-500 mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay ${amount}€` : "Processing..."}
      </button>
    </form>
  );
};

const PaymentCardModal2: React.FC<PaymentCardModalProps> = ({ onClose }) => {
    return (
      <div className="flex flex-col justify-center p-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm2  />
        </Elements>
      </div>
    )
  }
  
  export default PaymentCardModal2