import React from "react"
import { graphql } from "gatsby"
import ServicesList from "../components/ServicesList"

const ServiceTemplate = ({ data }) => {
  const servicesList = data.allContentfulService.nodes
  return (
      <main className="page">
        <ServicesList services={servicesList} />
      </main>
  )
}

export const query = graphql`
  query getServiceByType($service: String) {
    allContentfulService(filter: { serviceType: { slug: { eq: $service } } }) {
      nodes {
        serviceType {
          slug
        }
        id
        title
        slug
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default ServiceTemplate
