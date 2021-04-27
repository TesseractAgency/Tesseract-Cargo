import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as ServicesStyles from "./services.module.css"
const query = graphql`
  {
    allContentfulServiceType {
      nodes {
        id
        slug
        title
        description
        image {
          gatsbyImageData(
            aspectRatio: 1.5
            height: 500
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`
const Services = () => {
  const data = useStaticQuery(query)
  const services = data.allContentfulServiceType.nodes

  return (
    <section className={ServicesStyles.services}>
      <div className="container">
        <div className={ServicesStyles.servicesInner}>
          {services.map(item => {
            const { id, slug, title, description, image } = item
            const pathToImage = getImage(image)
            return (
              <Link to={`/${slug}`} key={id} className={ServicesStyles.service}>
                <GatsbyImage
                  image={pathToImage}
                  className={ServicesStyles.serviceImg}
                  alt={title}
                />
                <h5 className={ServicesStyles.serviceTitle}>{title}</h5>
                <p className={ServicesStyles.serviceDescription}>
                  {description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
