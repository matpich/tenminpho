import React from "react";

import MainComponent from "./MainComponent/MainComponent";
import Navigation from "./Navigation/Navigation";


export default () => {
    return (
        <div>

        
        <Navigation />
        <section id="test" class="hero is-primary is-fullheight-with-navbar">
            
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">
                        Załaduj swoje zdjęcia
                    </h1>
                    <h3 className="subtitle is-4">Nawet do 30 minut. Ty decydujesz.</h3>

                        <div className="file is-medium is-dark">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Twoje zdjęcie
                        </span>
                                </span>
                            </label>
                        </div>
                        <MainComponent />
                </div>

                
            </div>
            

                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active"><a>Overview</a></li>
                                <li><a>Modifiers</a></li>
                                <li><a>Grid</a></li>
                                <li><a>Elements</a></li>
                                <li><a>Components</a></li>
                                <li><a>Layout</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
        </section>
        </div>
    )
}