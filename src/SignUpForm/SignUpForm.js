import React from "react";

import "./SignUpForm.css";

import FormField from "../FormField/FormField";

export default class SignUpForm extends React.Component {
    render() {
        return (
            <form action="post">
                <h1 className="title is-3">Zarejestruj się</h1>

                <FormField 
                    labelText="Nick" 
                    type="text" 
                    placeholder="Podaj nick" />

                <FormField 
                    labelText="E-mail" 
                    type="email" 
                    placeholder="Podaj adres email" />

                <FormField
                    labelText="Hasło"
                    type="password"
                    placeholder="Podaj hasło" />

                <FormField
                    labelText="Powtórz hasło"
                    type="password"
                    placeholder="Powtórz hasło" />

                <div className="control">
                    <button className="button is-primary">Zarejestruj</button>
                </div>

            </form>
        )
    }
}