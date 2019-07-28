import React from "react";

import "./ImagePreview.css"

export default class ImagePreview extends React.Component {
    state = {imageData: null};

    async componentWillMount() {
        const imageData = await localStorage.getItem("imgToUpload");

        //if no image is loaded redirect to main page
        if (!imageData) window.location = window.location.origin;
        
        this.setState({imageData});
    }

    render () {
        return (
            <div className="container">
                <figure className="image">
                    <img id="img-image"
                        src={this.state.imageData}
                        alt="image-preview" />
                </figure>
            </div>
        )
    }
}