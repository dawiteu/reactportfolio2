import React from 'react';

import chef from "../assets/imgs/site_chef.png";
import empo from "../assets/imgs/site_emporium.png"; 
import cami from "../assets/imgs/site_caminar.png";
import flat from "../assets/imgs/site_flati.png"; 
import spac from "../assets/imgs/site_spacial.png";
import youc from "../assets/imgs/site_youcommunik.png";
import epil from "../assets/imgs/site_epilogue.png"; 
import cs16 from "../assets/imgs/site_cs16.png"; 

// les autres projets 

import arca from "../assets/imgs/projs/arcars.png"; 
import dawi from "../assets/imgs/projs/dawiteu2.png";
import raf1 from "../assets/imgs/projs/rafikfr1.png";
import raf2 from "../assets/imgs/projs/rafikfr2.png";
import daw2 from "../assets/imgs/projs/dawiteu1front.png";
import ijam from "../assets/imgs/projs/ijambrzyckaart.png";
import noty from "../assets/imgs/projs/noty1.png";
import fot2 from "../assets/imgs/projs/fotoszpilki.png";
import ills from "../assets/imgs/projs/illustratorbxl.png";

import pra1 from "../assets/imgs/projs/pratko1.png"; 
import mzca from "../assets/imgs/projs/mzprz.png"; 
import mzty from "../assets/imgs/projs/mztyl.png"; 
import pra3 from "../assets/imgs/projs/pratko3.png"; 




const Portfolio = () => {

    const goto = link => { window.location.href=link} 

    const darkmode = {
        color: "white",
        textShadow: "1px 1px 3px #000"
    }

    const lightmode = {
        color: "black",
        textShadow: "1px 2px 12px #000"
    }

    const projet = [ 
        {type: "web", nom: "Site du chef", img: chef, link: "http://www.dawit.eu", dark: false},
        {type: "web", nom: "emporium", img: empo, link: "https://dawiteu.github.io/cs_emporium_js_16/", dark: false},
        {type: "web", nom: "Caminar", img: cami, link: "https://dawiteu.github.io/html-sass-bootstrap-caminar/", dark: true}, 
        {type: "web", nom: "Flati", img: flat, link: "https://dawiteu.github.io/html-sass-flati-siteweb/", dark: true},
        {type: "web", nom: "Spacial", img: spac, link: "https://dawiteu.github.io/html-sass-bootstrap-spatial/", dark: true},
        {type: "web", nom: "You Communik", img: youc, link: "https://dawiteu.github.io/html-bootstrap-youcommunik/", dark:false},
        {type: "web", nom: "Epilogue", img: epil, link: "https://dawiteu.github.io/html-css-epilogue-exercice/", dark: true},
        {type: "web", nom: "Coding 16", img: cs16, link: "http://dawit.eu/proj/", dark: true},
        {type: "cdv", nom: "AR Cars", img: arca, link: "", dark:true},
        {type: "gra", nom: "DawiTeu 2018", img: dawi, link: "http://www.dawit.eu/", dark:true},
    
        {type: "cdv", nom: "Rafik Rafał Głowacki", img: raf1, link: "", dark:true},
        {type: "cdv", nom: "Rafik Rafał Głowacki", img: raf2, link: "", dark:true},

        {type: "gra", nom: "Paulina Pratko Photos", img: pra1, link: "", dark:true},
        {type: "gra", nom: "Paulina Pratko Photos 3", img: pra3, link: "", dark:true},

        {type: "cdv", nom: "Iwona Jambrzycka ART", img: ijam, link: "", dark:false},
        {type: "gra", nom: "Albinoty.com", img: noty, link: "http://www.albinoty.com", dark:true},
        {type: "cdv", nom: "DawiTeu 2020", img: daw2, link: "http://www.dawit.eu", dark:true},
        
        {type: "gra", nom: "Photographe sur talons", img: fot2, link: "", dark:true},
        {type: "gra", nom: "Illustrator Bruxelles 2015", img: ills, link: "", dark:true},
        {type: "cdv", nom: "Marta Zukowska Catering", img: mzca, link: "", dark:false},
        {type: "cdv", nom: "Marta Zukowska Catering", img: mzty, link: "", dark:false},
    ]; 

    const style = {
        flexDirection: 'row'
    };


    const changeType = (newtype) => {

        const btnsp = document.querySelectorAll(".btnprojoptions");
        const projs = document.querySelectorAll(".project"); 

        btnsp.forEach(btn => {
            btn.classList.remove("active");
            btn.getAttribute('filter') === newtype && btn.classList.add("active");
        });

        projs.forEach(proj => {
            if(newtype === "all"){
                proj.classList.remove("fadeout"); 
                proj.classList.add("fadein");
                let x = setTimeout(() => {
                    proj.style.display="flex";
                    clearTimeout(x);
                }, 200);
            }else{
                const type = proj.getAttribute('type'); 
                proj.classList.remove("fadeout"); 
                proj.classList.add("fadein");
                let y = setTimeout(() => {
                    proj.style.display="flex";
                    clearTimeout(y);
                }, 200);
                if(type !== newtype){
                    proj.classList.remove("fadein"); 
                    proj.classList.add("fadeout");
                    let z = setTimeout(() => {
                        proj.style.display="none";
                        clearTimeout(z);
                    }, 200);
                }  
            }
        });
    }


    return (
        <section className="content" id="portfolio">
            <h2 className="title">PROJETS:</h2>
            <div className="cardtype">
                <button className="active btnprojoptions" filter="all" onClick={() => changeType('all') }>All</button>
                <button className="btnprojoptions" filter="web" onClick={() => changeType('web') }>Web</button>
                <button className="btnprojoptions" filter="gra" onClick={() => changeType('gra') }>Graphiques</button>
                <button className="btnprojoptions" filter="cdv" onClick={() => changeType('cdv') }>Cartes de visite</button>
            </div>
            {/* <h1>Portfolio</h1> <img src={chef} alt="marche pas" />*/}

            <div className="cont" style={style}>
                
                {
                    projet.map((el, i) => {
                        const color = el.dark ? darkmode : lightmode; 
                        return (
                            <div key={i} className='project' type={el.type}> 
                                <div className="desc">
                                    <p style={color}>{el.nom}</p>
                                    <button onClick={() => goto(el.link)} style={color}>LIVE DEMO</button>
                                
                                </div> 

                                <img src={el.img} alt={el.nom} /> 
                            </div>
                        )
                    })
                }
            </div>

            
        </section>
    );
};

export default Portfolio;