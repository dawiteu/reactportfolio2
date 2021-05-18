import React, { Fragment } from 'react';


import About from './About';
import Skills from './Skills'; 
import Portfolio from './Portfolio'; 
import Contact from './Contact'; 

const Index = () => {
    return (
        <Fragment>
            <About /> 
            <Skills />
            <Portfolio />
            <Contact />
        </Fragment>
    );
};

export default Index;