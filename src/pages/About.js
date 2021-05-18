import React from 'react';
import photo from '../assets/imgs/dawit1.jpg';
const About = () => {
    return (
        <section className="content" id="about">
            {/* <h2 className="title">Je me présente:</h2> */}
            <div className="cont row">

                    <div className="col">
                        <img src={photo} alt="Dawid Tararuj // dawiTeu" />
                    </div>

                    <div className="col">
                        <h2>Dawid Tararuj</h2>
                        <p>Bonjour, je m'appelle Dawid et je suis futur full stack web dev. <br/> 
                        Je parle autant français que le polonais, mais j'écris en plus en HTML, CSS et PHP. <br/>
                        Bootstrap, React et Laravel sont de mes connaissances aussi. <br/><br/>
                        J'aime bien apprendre en développement un projet concret, sûr.
                        </p>
                    </div>
            </div>
        </section>
    );
};

export default About;