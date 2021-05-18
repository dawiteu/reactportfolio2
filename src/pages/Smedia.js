import React from 'react';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Smedia = () => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <section className="content" id="smedia">
            <h1>s Media</h1>
            <a onClick={scrollToTop}>To the top!</a>
        </section>
    );
};

export default Smedia;