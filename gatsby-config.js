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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://strapi-api-test55.herokuapp.com",
        queryLimit: 1000,
        contentTypes: [`portfolios`],
        singleTypes: [],
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloud_name: "hlalkroe5",
        api_key: 727173249846427,
        api_secret: "xeI1nxVgd0T0YxkVt4DHWW9QSi0",
        uploadFolder: 'gatsby-cloudinary',
      },
    },
  ],
}
