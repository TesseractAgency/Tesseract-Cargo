import * as React from "react"
import {graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({}) => {
    console.log()
    return (
        <Layout>
            <SEO title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{marginBottom: `1.45rem`}}
            />
            <p>
                <Link to="/services/">Go to page 2</Link> <br/>
            </p>
        </Layout>
    )
}


export default IndexPage
