import React from "react";

export default class FormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="field">
                <label className="label">{this.props.labelText}</label>
                <div className="control">
                    <input className={`input ${this.props.border}`} 
                           type={this.props.type} 
                           placeholder={this.props.placeholder} 
                           onChange={(e) => this.props.controlInputValue(e.target.value,this.props.index)}
                           />
                    <p className="help is-danger">Niepoprawny adres e-mail lub taki użytkownik już istnieje.</p>

                </div>
            </div>
        )
    }
}