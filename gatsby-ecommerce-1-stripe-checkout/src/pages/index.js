import * as React from "react"

import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe("pk_test_51JhERSGkYc9g1BvdAdto0rO94IZQ6BAqLaShXV1pie6mHqnY0dTObrEPGgBsZRffjvKBvB2SBviBv1FIPQ1Mlpit00Yw4DxR4C")

// markup
const IndexPage = ({location}) => {

  
  const redirectToCheckout = async () => {

    const stripe = await stripePromise
    
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1JhEhQGkYc9g1Bvdhk8kZJ8z", quantity: 3 },
        { price: "price_1JhEd2GkYc9g1Bvd737V5xW2", quantity: 6 }
    ], //array of objects
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    })
  }

  return (
    <div style={{margin: "0px"}}>
      <div>
      Hello world
      </div>

      <button onClick={redirectToCheckout}>Checkout</button>
     
    </div>
  )
}

export default IndexPage
