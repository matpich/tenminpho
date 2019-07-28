import React from "react";

import Form from "../Form/Form";
import Joi from "@hapi/joi";
import { loginSchema } from "../validation/validation";

const loginConfig = [
    {
        labelText: "E-mail",
        type: "email",
        placeholder: "Podaj adres email"
    },
    {
        labelText: "Hasło",
        type: "password",
        placeholder: "Podaj hasło."
    }
]

export default class Login extends React.Component {
    //receives array of input values, in Login case it will be 2 element array where index 0 is email and index 1 is password
    validateLogin (inputsValues) {
        //abortEarly prevents Joi from stop validating after first error
        const { error, value } = Joi.validate({ email: inputsValues[0], password: inputsValues[1] }, loginSchema, { abortEarly: false });
        if(!error) {
            console.log("Wszystko ok.")
        } else {
            console.log(error.details);
        }
        
    }

    render() {
        return (
            <div className="container has-centered-text">
                <div className="columns">

                    <div className="column"></div>

                    <div className="column is-half">
                        <div className="box">
                            <Form loginConfig={loginConfig} validate={this.validateLogin}/>
                        </div>
                    </div>

                    <div className="column"></div>

                </div>
            </div>

        )
    }
}