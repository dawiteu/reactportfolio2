import React, { useEffect, useState } from 'react';
import { get } from 'react-scroll/modules/mixins/scroller';
import photocv from "../assets/imgs/cv_img.png";


const Contact = () => {

    const [numb1, setN1] = useState(0);
    const [numb2, setN2] = useState(0);
    const [result, setRes] = useState(0); 


    const numbArray = [
        { numero: 1, nom:  "un"},      
        { numero: 2, nom:  "deux"},      
        { numero: 3, nom:  "trois"},       
        { numero: 4, nom:  "quatre"},        
        { numero: 5, nom:  "cinq"},        
        { numero: 6, nom:  "six"},
        { numero: 7, nom:  "sept"},
        { numero: 8, nom:  "huit"},
        { numero: 9, nom:  "neuf"}
    ];

    const getRandNumb = () => {
        return Math.floor(Math.random() * (numbArray.length - 1) +1);
    }

    const reloadCaptcha = () => { 
        captcha(); 
    }
    const captcha = () => {
        setN1(getRandNumb()); 
        setN2(getRandNumb()); 
        setRes(numb1 + numb2); 
    }

    useEffect(() => {
        captcha();
    });

    return (
        <section className="content" id="contact">
            <h2 className="title white">Contact</h2>
            <div className="cont">
                <div className="row">
                        <div className="col f-1">
                            <div className="project">
                                    <div className="desc">
                                        <button>Voir le CV</button>
                                        <button>Télécharger</button>
                                    </div>
                                <img src={photocv} alt="Dawid Tararuj CV" />
                            </div>
                        </div>
                        
                        <div className="col f-2">
                            <div className="iconinfo">
                                <i className="fas fa-phone-alt"></i> <a href="tel://0032484026242" className="tel">0484 02 62 42</a>
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-at"></i> <a href="mailto:dawid@tararuj.be"> Dawid@Tararuj.be</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-home"></i> <a href="###"> 1030 Bruxelles</a>
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-laptop"></i><a href="http://www.dawit.eu"> www.dawit.eu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-github"></i><a href="https://github.com/dawiteu/"> /dawiteu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/dawiteu/"> /dawiteu</a> 
                            </div>



                        </div>
                        <div className="col f-4">
                            <form method="post" action="" onSubmit={(e) => {e.preventDefault() }}> 
                                {/* onSubmit={(e) => {alert('erreur..');e.preventDefault() }} */}
                                <div className="col">
                                    <div className="forminfo">
                                        <input type="text" name="nom" placeholder="Nom" />
                                        <input type="text" name="prenom" placeholder="Prénom" />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="forminfo">
                                        <input type="text" name="subject" placeholder="Sujet" />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="forminfo">
                                        <textarea rows="12"  placeholder="Votre message ici"></textarea>    
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="forminfo">
                                        <p>{numb1} pomme et {numb2} autre(s) pommes seront égales à  <input type="number" /> pommes ensemble. </p> 
                                        <p id="capth"></p>
                                    </div>
                                </div>

                                <div className="col">
                                    <input type="submit" value="Reload Captcha" className="submit" onClick={reloadCaptcha} /><input type="submit" className="submit" value="Envoyer >> " onClick={captcha} />
                                </div>
        
                            </form>                    
                        </div>
                    </div>                   
                </div>
        </section>
    );
};

export default Contact;