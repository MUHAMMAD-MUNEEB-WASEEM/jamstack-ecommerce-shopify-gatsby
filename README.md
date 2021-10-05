# Jamstack-ecommerce-shopify-gatsby

This repo contains work and project related to ecommerce. Different payment gateways like stripe, 2checkout are utilized. Moreover Shopify, headless shopify and snipcart are also used for development. JAMSTACK is best for Ecommerce now a days as it is fast and SEO friendly

# About gatsby-ecommerce-1-stripe-checkout:

In this, stripe is connected with gatsby app. This is simple and easy method which gives you feasibility of having a stripe checkout page

## Creating Project:

gatsby new gatsby-ecommerce-1-stripe-checkout https://github.com/gatsbyjs/gatsby-starter-minimal

## Starting project:

netlify dev
or,
gatsby develop

## Dependencies:

* npm i @stripe/stripe-js
* npm i dotenv 
* npm install gatsby-source-stripe
* npm i --save stripe (stripe for server side)

## Division:

It is divided into 3 parts

1. Simple stripe checkout page containing all products there 
* Files: index.js (Other ones are payment-success and payment-error)

2. Previously we directly have checkout button and on clicking that we get products there Now we need to fetch our all products from stripe on some page so user can choose to buy which product he wants, so we need to fetch data from stripe
* Files: productList.js (other are payment-success and payment-error)

3. In this, we put our redirectToCheckout on server which is functions in Gatsby
* Files: Main files are checkout.js (server) and checkout-session.js (client)

## Tutorial Followed:

* https://www.gatsbyjs.com/tutorial/ecommerce-tutorial/
* https://stripe.com/docs/payments/accept-a-payment?integration=elements

## Important Links:

* https://dashboard.stripe.com/test/apikeys (To get Api keys)
* https://dashboard.stripe.com/login_success?redirect=%2Fsettings%2Fcheckout (client-side integration)
* https://dashboard.stripe.com/login_success?redirect=%2Fsettings%2Fcheckout (Creating Products)
