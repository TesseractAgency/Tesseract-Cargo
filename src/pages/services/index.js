import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"

const Services = ({ data }) => {
  const services = data.allContentfulServiceType.nodes

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {services.map(item => {
            return (
              <Link to={`/services/${item.slug}`} key={item.id} className="tag">
                <h5>{item.title}</h5>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulServiceType {
      nodes {
        id
        slug
        title
      }
    }
  }
`

export default Services
