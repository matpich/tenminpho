import React from 'react';

import Form from '../Form/Form';

import { emailValidation, passwordlValidation } from '../validation/validation';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    //config object has to be declared in constructor because I need to create ref to change child state
    this.loginConfig = [
      {
        labelText: 'E-mail',
        type: 'email',
        placeholder: 'Podaj adres email',
        errorMessage: 'Nieprawidłowy adres e-mail.',
        reference: React.createRef()
      },
      {
        labelText: 'Hasło',
        type: 'password',
        placeholder: 'Podaj hasło.',
        errorMessage: 'Nieprawidłowe hasło.',
        reference: React.createRef()
      }
    ];
  }

  //receives array of input values, in Login case it will be 2 element array where index 0 is email and index 1 is password
  //validateLogin method will be passed as props to <Form /> component
  validateLogin = async inputsValues => {
    // refers error visibility handling function
    const emailflipError = this.loginConfig[0].reference.current.flipError;
    const passwordflipError = this.loginConfig[1].reference.current.flipError;

    try {
      const result = await axios.post('http://localhost:3001/users', {
        email: inputsValues[0],
        password: inputsValues[1]
      });
      console.log(result);
    } catch (err) {
      console.log(err);
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
                name="Zaloguj się"
                config={this.loginConfig}
                validate={this.validateLogin}
              />
            </div>
          </div>

          <div className="column" />
        </div>
      </div>
    );
  }
}
