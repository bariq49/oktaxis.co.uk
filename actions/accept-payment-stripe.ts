"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: "2025-01-27.acacia",
});

export async function processStripePayment({
  paymentMethodId,
  amount,
}: {
  paymentMethodId: string;
  amount: number;
}) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "GBP",
      payment_method: paymentMethodId,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

    return { success: true, paymentId: paymentIntent.id };
  } catch (error) {
    console.error("Stripe Payment Error:", error);
    return { success: false, error: "Payment failed" };
  }
}
