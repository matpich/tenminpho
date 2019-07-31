import React from 'react';

import Form from '../Form/Form';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    //config object has to be declared in constructor because I need to create ref to change child state
    this.signupConfig = [
      {
        labelText: 'Nazwa użytkownika',
        type: 'text',
        placeholder: 'Podaj nick',
        errorMessage: 'Nieprawidłowa nazwa uzytkownika.',
        reference: React.createRef()
      },
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
      },
      {
        labelText: 'Powtórz hasło',
        type: 'password',
        placeholder: 'Podaj hasło.',
        errorMessage: 'Nieprawidłowe hasło.',
        reference: React.createRef()
      }
    ];
  }
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
