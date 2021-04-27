import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";

const ServiceTemplate = ({ data }) => {
  const { title, image, description } = data.contentfulService
  const pathToImage = getImage(image)
  return (
    <Layout>
      <main className="page">
        <div className="service-page">
          <section className="service-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
            />
            <article>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleService($slug: String) {
    contentfulService(slug: { eq: $slug }) {
      title
      description
      image {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`

export default ServiceTemplate
