// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = async (event) => {
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
          images: ["https://ae01.alicdn.com/kf/HTB1eB_4XtjvK1RjSspiq6AEqXXaU/Fengdong-fashion-school-backpack-for-girls-school-bags-female-bagpack-children-backpacks-kids-cute-USB-bag.jpg"]
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: "payment",
    successUrl: `http://localhost:8888/payment-success/`,
    cancelUrl: `http://localhost:8888/payment-error`,
  });
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
