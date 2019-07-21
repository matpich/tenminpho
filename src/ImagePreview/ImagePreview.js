import React from "react";

import "./ImagePreview.css"

export default (props) => {
    return (
        <div className="container">
            <figure className="image">
                <img id="img-image" 
                    src={props.imagePrev} 
                    alt="image-preview" />
            </figure>
        </div>
    )
}