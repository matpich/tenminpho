import React from "react";

import MainComponent from "./MainComponent/MainComponent";
import Navigation from "./Navigation/Navigation";
import UploadPart from "./UploadPart/UploadPart";



export default class App extends React.Component {
    state = { imagePrev: null };

    handleImageLoad = async (imageData) => {
        await this.setState({ imagePrev: imageData });
    }

    //shows correct component - if user has chosen photo it will re-render with UploadPart component
    ifImageChosen = () => {
        if(this.state.imagePrev){
            return <UploadPart imagePrev={this.state.imagePrev} />
        }
        else {
            return <MainComponent handleImageLoad={this.handleImageLoad} />
        }
    }

    render () {
        return (
            <div>
                <Navigation />
                <section id="test" className="hero is-primary is-fullheight-with-navbar">

                    <div className="hero-body">
                        {this.ifImageChosen()}                        
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