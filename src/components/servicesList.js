import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const ServicesList = ({ services = [] }) => {
    return (
        <div className="recipes-list">
            {services.map(service => {
                const { id, title, image , slug} = service
                const pathToImage = getImage(image)
                return (
                    <Link key={id} to={`/services/${slug}`} className="recipe">
                        <GatsbyImage
                            image={pathToImage}
                            className="recipe-img"
                            alt={title}
                        />
                        <h5>{title}</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur eaque illum iure magni officia quas ullam. Amet animi at, autem dolore earum explicabo fugiat id laudantium, quaerat, quo sequi?
                        </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default ServicesList
