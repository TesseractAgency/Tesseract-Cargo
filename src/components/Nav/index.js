import React from 'react';
import {Link} from "gatsby";
import * as NavStyles from './nav.module.css'
const Nav = () => {
    return (
        <nav>
            <Link className={NavStyles.navLink} to="/">Home</Link>
        </nav>
    );
};

export default Nav;
