import React from "react";

import Form from "../Form/Form";

import axios from "axios";

import {
  emailValidation,
  passwordlValidation,
  nickNameValidation
} from "../validation/validation";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    //config object has to be declared in constructor because I need to create ref to change child state
    this.signupConfig = [
      {
        labelText: "Nazwa użytkownika",
        type: "text",
        placeholder: "Podaj nick",
        errorMessage: "Nieprawidłowa nazwa uzytkownika.",
        reference: React.createRef()
      },
      {
        labelText: "E-mail",
        type: "email",
        placeholder: "Podaj adres email",
        errorMessage:
          "Nieprawidłowy adres e-mail lub użytkownik o podanym adresie już istnieje.",
        reference: React.createRef()
      },
      {
        labelText: "Hasło",
        type: "password",
        placeholder: "Podaj hasło.",
        errorMessage:
          "Hasło powinno składać się conajmniej z 8 znaków oraz zawierać minimum 1 cyfrę.",
        reference: React.createRef()
      },
      {
        labelText: "Powtórz hasło",
        type: "password",
        placeholder: "Podaj hasło.",
        errorMessage: "Hasła nie są identyczne.",
        reference: React.createRef()
      }
    ];
  }

  registerPost = async user => {
    try {
      const response = await axios.post("http://localhost:3001/users", {
        name: user[0],
        email: user[1],
        password: user[2]
      });
    } catch (error) {
      //if error that means user alredy exists
      this.signupConfig[1].reference.current.flipError(true);
      console.log(error);
    }
  };

  validateSignUp = inputsValues => {
    // refers error visibility handling function
    const nickflipError = this.signupConfig[0].reference.current.flipError;
    const emailflipError = this.signupConfig[1].reference.current.flipError;
    const passwordflipError = this.signupConfig[2].reference.current.flipError;
    const repeatPasswordflipError = this.signupConfig[3].reference.current
      .flipError;

    const nickValidationResult = nickNameValidation(inputsValues[0]);
    nickflipError(nickValidationResult.error);

    const emailValidationResult = emailValidation(inputsValues[1]);
    emailflipError(emailValidationResult.error);

    const passwordValidationResult = passwordlValidation(inputsValues[2]);
    passwordflipError(passwordValidationResult.error);

    const passwordComparingResult = inputsValues[2] !== inputsValues[3];
    repeatPasswordflipError(passwordComparingResult);

    if (
      nickValidationResult &&
      !emailValidationResult.error &&
      !passwordValidationResult.error &&
      !passwordComparingResult
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="container has-centered-text">
        <div className="columns">
          <div className="column" />

          <div className="column is-half">
            <div className="box">
              <Form
                name="Zarejestruj się"
                config={this.signupConfig}
                validate={this.validateSignUp}
                submit={this.registerPost}
              />
            </div>
          </div>

          <div className="column" />
        </div>
      </div>
    );
  }
}
