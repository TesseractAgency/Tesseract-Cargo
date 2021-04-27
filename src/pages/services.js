import React from "react"
import { graphql, Link } from "gatsby"

const Services = ({ data }) => {
  const services = data.allContentfulServiceType.nodes

  return (
    <main className="page">
      <section className="tags-page">
        {services.map(item => {
          return (
            <Link to={`/${item.slug}`} key={item.id} className="tag">
              <h5>{item.title}</h5>
            </Link>
          )
        })}
      </section>
    </main>
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
