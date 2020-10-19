const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data: { portfolios: { slugs } } } = await graphql(`
    query GetAllPortfolioSlugs {
      portfolios: allStrapiPortfolios {
        slugs: nodes {
          slug
        }
      }
    }
  `)

  slugs.forEach(({ slug }) => {
    createPage({
      path: `/portfolios/${slug}`,
      component: path.resolve(`src/templates/portfolio.js`),
      context: {
        slug
      },
    })
  })
}
