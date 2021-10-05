import * as React from "react"

import { loadStripe } from "@stripe/stripe-js"
import { useStaticQuery } from "gatsby"
import { graphql } from 'gatsby'

const stripePromise = loadStripe("pk_test_51JhERSGkYc9g1BvdAdto0rO94IZQ6BAqLaShXV1pie6mHqnY0dTObrEPGgBsZRffjvKBvB2SBviBv1FIPQ1Mlpit00Yw4DxR4C")

// markup
const ProductList = ({location}) => {

    const data = useStaticQuery(
        graphql`
            query ProductPrices {
                prices : allStripePrice {
                    edges {
                        node {
                            id
                            active
                            currency
                            unit_amount
                            product {
                                id
                                name
                                images
                            }
                        }
                    }
                }
            }
        `
    );
console.log('Stripe data', data)

const redirectToCheckout = async (id) => {

    const stripe = await stripePromise
    
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: id, quantity: 1 },
    ], //array of objects
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    })
  }

  return (
    <div style={{margin: "0px", backgroundColor: "lightgray", width:"100wh", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div>
        <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Product List</h1>

        <div style={{display:"flex", alignItems:"center"}}>
            {data.prices.edges.map((edge)=>(
                //console.log(edge.node.product.name)
                <div style={{backgroundColor: "White", borderRadius: "5px", padding:"10px", margin:"10px", displayL:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} key={edge.node.product.id}>
                    <img style={{display:"flex", alignItems:"center", margin:"auto"}}width="100px" height="100px" src={edge.node.product.images[0]} alt=""/>
                    <h2>Product Name: <span style={{fontSize: "20px"}}>{edge.node.product.name}</span></h2>
                    <h3>Product Price: <span style={{fontSize: "16px"}}>{edge.node.unit_amount}</span></h3>
                    <button style={{cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", margin:"auto", backgroundColor: "teal", border: "none", borderRadius:"5px", padding: "7px 10px", color: "white", fontSize:"16px", fontWeight: "500"}} onClick={()=>redirectToCheckout(edge.node.id)}>Checkout</button>
                </div>
            ))}
        </div>
      </div>

     
    </div>
  )
}

export default ProductList