import React from 'react';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


const Footer = () => {

    const scrollToTop = (e) => {
        e.preventDefault();
        scroll.scrollToTop();
    }

    return (
        <footer>
            <a href="###" onClick={(e) => scrollToTop(e)} className="totop"><i className="fas fa-arrow-up"></i></a>
            <p>Copyright &copy; dawiteu</p>  
        </footer>
    );
};

export default Footer;