const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      portfolios: { slugs },
    },
  } = await graphql(`
    query GetAllPortfolioSlugs {
      portfolios: allStrapiPortfolios {
        slugs: nodes {
          slug
        }
      }
    }
  `)

  const {
    data: {
      availableComponents: { types },
    },
  } = await graphql(`
    query GET_AVAILABLE_COMPONENT_TYPES {
      availableComponents: allStrapiPortfolios {
        types: distinct(field: portfolio___componentName)
      }
    }
  `)

  const getPortfolioQuery = ({
    hasDescription,
    hasTitle,
  }) => `query GetPortfolioBySlug(
      $slug: String!
    ) {
      portfolios: allStrapiPortfolios(filter: { slug: { eq: $slug } }) {
        nodes {
          portfolio {
            componentName
            id
            ${hasTitle ? "title" : ""}
            ${hasDescription ? "desc" : ""}
          }
          slug
        }
      }
    }
  `

  for (const { slug } of slugs) {
    const { data } = await graphql(
      getPortfolioQuery({
        hasDescription: types.includes("description"),
        hasTitle: types.includes("description"),
        hasImage: types.includes("image")
      }),
      { slug }
    )

    console.log(data)

    createPage({
      path: `/portfolios/${slug}`,
      component: path.resolve(`src/templates/portfolio.js`),
      context: {
        slug,
        portfolio: data,
      },
    })
  }
}
