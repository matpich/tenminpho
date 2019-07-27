import React from "react";

export default class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

    }

    inputValue =  () => {
        //reads image data from input tag
        const file = this.inputRef.current.files[0];
        //creating new FileReader object
        const reader = new FileReader();

        //it's onload event handler
        reader.onload =  (e) => {
            //this loads image data to local storage
            localStorage.setItem('imgToUpload', e.target.result);
        }
        //start reading file data, once finished resolves onload event
        reader.readAsDataURL(file);
        //redirect to '/upload'
        window.location = `${window.location.origin}/upload`;
    }

    localTest () {
        localStorage.setItem('testowe', 'qwerty');
    }


    render () {
        return (
            <div className="file is-medium is-dark">
                <label className="file-label">
                    <input 
                        className="file-input" 
                        type="file" 
                        name="resume" 
                        ref={this.inputRef}
                        onChange={this.inputValue}/>
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
        )
    }
}