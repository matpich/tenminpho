import React from "react";

import FileInput from "../FileInput/FileInput";

export default (props) => {
        return (
            <div className="container">
                <h1 className="title is-1">
                    Załaduj swoje zdjęcia
                    </h1>
                <h3 className="subtitle is-4">Nawet do 30 minut. <br />Ty decydujesz.</h3>

                <FileInput imageData={props.handleImageLoad}/>
            </div>
        )
}