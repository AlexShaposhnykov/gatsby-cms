import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
const componentFactoryFnsByType = {
  title: ({ title }) => <h3>TITLE COMPONENT: {title}</h3>,
  description: ({ desc }) => <p>DESC COMPONENT: {desc}</p>,
  image: ({
    image: {
      childCloudinaryAsset: { fluid },
    },
  }) => {
    console.log({ fluid })

    return (
      <div>
        IMAGE COMPONENT: <Image alt="IMAGE" fluid={fluid} />
      </div>
    )
  },
}

const getComponentByType = data =>
  componentFactoryFnsByType[data.componentName](data)

const Portfolio = ({ pageContext }) => {
  console.log({ pageContext })

  return (
    <article>
      {/*{data.portfolios.nodes[0].portfolio.map(component =>*/}
      {/*  getComponentByType(component)*/}
      {/*)}*/}
    </article>
  )
}

export default Portfolio
