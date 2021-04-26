import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

const ServiceTemplate = ({ data }) => {
    const {
        title,
        image,
    } = data.contentfulService
    const pathToImage = getImage(image)
    return (
        <div>
            <SEO title={title} description={'folor'} />
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
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
        }
    }
`

export default ServiceTemplate
