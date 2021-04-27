import React from 'react';
import * as FooterStyles from './footer.module.css'
const Footer = () => {
    return (
        <footer className={FooterStyles.pageFooter}>
            <div className="container">
                <div className="page-footer__inner">
                    <p>
                        &copy; {new Date().getFullYear()} <span>Dolor</span>. Built with{" "}
                        <a href="https://www.gatsbyjs.com/">Gatsby</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
