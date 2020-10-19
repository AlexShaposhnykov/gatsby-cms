import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

export const portfolioSlugsQuery = graphql`
  query GetAllPortfolioSlugs {
    portfolios: allStrapiPortfolios {
      slugs: nodes {
        slug
      }
    }
  }
`

const Home = () => {
  const { portfolios: { slugs } } = useStaticQuery(portfolioSlugsQuery)

  return (
    <header>
      {slugs.map(({ slug, id }, i) => (
        <Link to={`/portfolios/${slug}`} key={id}>
          Portfolio {i + 1}
        </Link>
      ))}
    </header>
  )
}

export default Home
