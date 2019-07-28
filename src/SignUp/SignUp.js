import React from "react";

import SignUpForm from "../SignUpForm/SignUpForm";

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="container has-centered-text">
                <div className="columns">

                    <div className="column"></div>

                    <div className="column is-half">
                        <div className="box">
                            <SignUpForm />
                        </div>
                    </div>

                    <div className="column"></div>

                </div>
            </div>

        )
    }
}