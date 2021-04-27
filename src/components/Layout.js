import React from "react"
import Header from "./Header/"
import Footer from "./Footer/"

import "normalize.css"
import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
