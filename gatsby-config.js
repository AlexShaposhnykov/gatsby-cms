/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://aqueous-dusk-70101.herokuapp.com",
        queryLimit: 1000,
        contentTypes: [`portfolios`],
        singleTypes: [],
      },
    },
  ],
}
