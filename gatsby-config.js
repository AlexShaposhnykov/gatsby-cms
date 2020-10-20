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
        apiURL: process.env.API_URL || 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: [`portfolios`],
        singleTypes: [],
      },
    },
  ],
}
