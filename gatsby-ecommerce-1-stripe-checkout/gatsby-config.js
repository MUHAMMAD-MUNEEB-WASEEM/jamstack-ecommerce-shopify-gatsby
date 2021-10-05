
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
          resolve: `gatsby-source-stripe`,
          options: {
            objects: ["Price"],
            secretKey: process.env.STRIPE_SECRET_KEY,
            downloadFiles: false,
          },
        },
      ],
}