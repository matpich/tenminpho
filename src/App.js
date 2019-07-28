import React from "react";

import {BrowserRouter, Route} from "react-router-dom";

import MainComponent from "./MainComponent/MainComponent";
import Navigation from "./Navigation/Navigation";
import UploadPart from "./UploadPart/UploadPart";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";



export default class App extends React.Component {
    render () {
        return (
            <div>
                <Navigation />
                <section id="test" className="hero is-primary is-fullheight-with-navbar">

                    <div className="hero-body">
                        <BrowserRouter>
                                <Route path="/" exact component={MainComponent} />
                                <Route path="/upload" component={UploadPart} />
                                <Route path="/signup" component={SignUp} />
                                <Route path="/login" component={Login} />
                        </BrowserRouter>                      
                    </div>

                    {/* <div class="hero-foot">
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
                </div> */}
                </section>
            </div>
        )
    }

}