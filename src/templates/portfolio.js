import React from "react"

import { graphql } from "gatsby"

export const query = graphql`
  query GetPortfolioBySlug($slug: String) {
    portfolios: allStrapiPortfolios(filter: { slug: { eq: $slug } }) {
      nodes {
        portfolio {
          componentName
          title
          image {
            relativePath
          }
          id
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
  image: ({ image: { relativePath } }) => (
    <div>
      IMAGE COMPONENT: <img alt="IMAGE" src={relativePath} />
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
