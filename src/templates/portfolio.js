import React from "react"

import { graphql } from "gatsby"

import Image from "gatsby-image";

export const query = graphql`
  query GetPortfolioBySlug($slug: String) {
    portfolios: allStrapiPortfolios(filter: { slug: { eq: $slug } }) {
      nodes {
        portfolio {
          componentName
          title
          id
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desc
        }
        slug
      }
    }
  }
`

const componentFactoryFnsByType = {
  title: ({ title }) => <h3>TITLE COMPONENT: {title}</h3>,
  description: ({ desc }) => <p>DESC COMPONENT: {desc}</p>,
  image: ({ image: { childImageSharp: { fluid } } }) => (
    <div>
      IMAGE COMPONENT: <Image alt="IMAGE" fluid={fluid} />
    </div>
  ),
}

const getComponentByType = data =>
  componentFactoryFnsByType[data.componentName](data)

const Portfolio = ({ data }) => {
  return (
    <article>
      {data.portfolios.nodes[0].portfolio.map(component => getComponentByType(component))}
    </article>
  )
}

export default Portfolio
