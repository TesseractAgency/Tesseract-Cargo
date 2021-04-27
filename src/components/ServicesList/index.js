import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as ServicesListStyles from "./servicesList.module.css";
const ServicesList = ({ services = [] }) => {
  return (
    <section className={ServicesListStyles.servicesList}>
      {services.map(service => {
        const { id, title, image, slug } = service
        const pathToImage = getImage(image)
        return (
          <Link key={id} to={`/${slug}`} className="service">
            <GatsbyImage
              image={pathToImage}
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur consequuntur eaque illum iure magni officia quas ullam.
              Amet animi at, autem dolore earum explicabo fugiat id laudantium,
              quaerat, quo sequi?
            </p>
          </Link>
        )
      })}
    </section>
  )
}

export default ServicesList
