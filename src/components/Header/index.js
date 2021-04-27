import * as React from "react"
import PropTypes from "prop-types"
import * as HeaderStyles  from "./header.module.css"
import Nav from "../Nav/"
const Header = () => (
  <header className={HeaderStyles.pageHeader}>
    <div className="container">
      <div className="page-header__inner">
        <Nav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
