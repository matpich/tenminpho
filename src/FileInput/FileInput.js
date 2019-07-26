import React from "react";

export default class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

    }

    inputValue = () => {
        const file = this.inputRef.current.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            this.props.imageData(e.target.result);
            localStorage.setItem('imgToUpload', e.target.result)
        }
        reader.readAsDataURL(file);
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