import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiceTemplate = ({ data }) => {
  const { title, image } = data.contentfulService
  const pathToImage = getImage(image)
  return (
    <div>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query getSingleService($slug: String) {
    contentfulService(slug: { eq: $slug }) {
      title
      image {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`

export default ServiceTemplate
