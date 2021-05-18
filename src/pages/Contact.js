import React from 'react';
import photocv from "../assets/imgs/cv_screen1.png";


const Contact = () => {

    return (
        <section className="content" id="contact">
            <h2 className="title white">Contact</h2>
            <div className="cont">
                <div className="row">
                        <div className="col f-1">
                            <div className="project">
                                    <div className="desc">
                                        <button>Voir le CV </button>
                                        <button>Télécharger</button>
                                    </div>
                                <img src={photocv} alt="dawid le bg pour cv " />
                            </div>
                        </div>
                        
                        <div className="col f-2">
                            <div className="iconinfo">
                                <i className="fas fa-phone-alt"></i> <a href="###" className="tel">0484 11 22 33</a>
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-at"></i> <a href="###"> Dawid @ Tararuj .be</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-home"></i> <a href="###"> 1030 Bruxelles</a>
                            </div>

                            <div className="iconinfo">
                                <i className="fas fa-laptop"></i><a href="###"> www.dawit.eu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-google"></i><a href="###"> /dawiteu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-snapchat"></i><a href="###"> /dawiteu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-instagram"></i><a href="###"> /dawiteu</a> 
                            </div>

                            <div className="iconinfo">
                                <i className="fab fa-twitter"></i><a href="###"> /dawiteu</a> 
                            </div>

                        </div>
                        <div className="col f-4">
                            <form method="post" action="" onSubmit={(e) => {alert('erreur..');e.preventDefault() }}>
                                <div className="col">
                                    <div className="forminfo">
                                        <label htmlFor="nom">Nom: </label>  <input type="text" name="nom" />
                                    </div>

                                    <div className="forminfo">
                                        <label htmlFor="prenom">Prénom: </label> <input type="text" name="prenom" />
                                    </div>

                                    <div className="forminfo">
                                    <label htmlFor="subject">Sujet: </label> <input type="text" name="prenom" />
                                    </div>

                                </div>

                                <div className="col">

                                    <div className="forminfo">
                                        <label htmlFor="message">Message:</label>
                                        <textarea></textarea>    
                                    </div>

                                </div>

                                <div className="col">
                                    <input type="submit" className="submit" value="Envoyer >> " />
  
                                </div>
        
                            </form>                    
                        </div>
                    </div>                   
                </div>
        </section>
    );
};

export default Contact;