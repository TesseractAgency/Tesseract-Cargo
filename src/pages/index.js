import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Services from "../components/Services"

const IndexPage = ({ data }) => {
  const { title, heroImage } = data.contentfulPage
  const pathToImage = getImage(heroImage)
  return (
    <Layout>
      <h1>{title}</h1>
      <GatsbyImage image={pathToImage} alt={title} />
      <br/>
      <Services />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPage(slug: { eq: "/" }) {
      title
      heroImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`

export default IndexPage
