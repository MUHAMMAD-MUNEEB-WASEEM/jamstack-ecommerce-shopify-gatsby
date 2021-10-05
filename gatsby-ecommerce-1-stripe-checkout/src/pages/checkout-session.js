import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51JhERSGkYc9g1BvdAdto0rO94IZQ6BAqLaShXV1pie6mHqnY0dTObrEPGgBsZRffjvKBvB2SBviBv1FIPQ1Mlpit00Yw4DxR4C")

export default function CheckoutSession({location}) {
  
    const redirectToCheckout = async ()=> {
        const stripe = await stripePromise;
        const response = await fetch('/.netlify/functions/checkout');
        const data = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: data.id
        })
    }

  return (
      <div>
        <div>Hello Checkout Session</div>

        <button onClick={redirectToCheckout}>Checkout</button>
      </div>
    )
}