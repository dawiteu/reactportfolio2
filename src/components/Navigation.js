import React from 'react';
import { Link } from 'react-scroll'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Navigation = () => {

    const goToTop = (e) => {
        if (window.location.href.indexOf("contact") > -1) {
            scroll.scrollToTop();
        }else{
            e.preventDefault();
            scroll.scrollToTop();
        }
    }


    const links = [ 
        {name: "about"}, 
        {name: "skills"}, 
        {name: "portfolio"},
        // {name: "smedia"}, 
        {name: "contact"}
    ];



    return (
        <nav>
            <a href="/" onClick={(e) => goToTop(e)} className="bold">Dawid Tararuj</a> 

            <ul>
                <Router>
                    { 
                        links.map((item, i) => { 
                            return ( 
                            <li key={i}> 
                                {
                                    <Link to={item.name} isDynamic={true} hashSpy delay={0} offset={-80} spy={true} smooth={true} >{item.name}</Link>
                                }
                            </li>);
                        })
                    }
                </Router>
            </ul>
        </nav>
    );
};

export default Navigation;