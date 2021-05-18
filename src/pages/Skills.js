import React from 'react';

const Skills = () => {
    return (
        <section className="content" id="skills"> 
            <h2 className="title">ACQUIS:</h2>
            <div className="cont">
                {/* <h3>Mes connaissances</h3> */}
                <p className="center">
                    Mes connaissances ne sont pas définie par un pourcentage ni un nombre d'étoiles. <br/> Un language est acquis à partir du moment où j'ai compris sa
                    logique et que je m'y débrouille. 
                </p>
                <div className="row">
                    <div className="col">
                        <h3 className="title">Front &#123; </h3>
                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fab fa-html5 fa-3x"></i></dt>
                                <dd>HTML 5</dd> 
                            </div>
                            
                            <div className="compet">
                                <dt><i className="fab fa-css3-alt fa-3x"></i></dt>
                                <dd>CSS 3</dd>
                            </div>
                            
                            <div className="compet">
                                <dt><i className="fab fa-js-square fa-3x"></i></dt>
                                <dd>JS</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-sass fa-3x"></i></dt>
                                <dd>Sass/Scss</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-react fa-3x"></i></dt>
                                <dd>ReactJS</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-bootstrap fa-3x"></i></dt>
                                <dd>Bootstrap</dd>
                            </div>

                        </div>
                        <h3 className="title">&#125; </h3>
                    </div>
                    <div className="col">
                        <h3 className="title">Back &#123;</h3>
                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fab fa-php fa-3x"></i></dt>
                                <dd>PHP</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-database fa-3x"></i></dt>
                                <dd>MySQL</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-laravel fa-3x"></i></dt>
                                <dd>Laravel</dd> 
                            </div>

                            <h3 className="title">&#125; </h3>
                        </div>

                    </div>
                    <div className="col">
                        <h3 className="title">+</h3>

                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fas fa-terminal fa-3x"></i></dt>
                                <dd>Bash</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-github fa-3x"></i></dt>
                                <dd>GitHub</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>Photoshop</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>Illustrator</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>phpmyadmin</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-trello fa-3x"></i></dt>
                                <dd>Trello</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-git-alt fa-3x"></i></dt>
                                <dd>Git</dd> 
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;