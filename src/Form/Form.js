import React from 'react';

import './Form.css';

import FormField from '../FormField/FormField';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFieldList: null,
      formFieldsValues: new Array(this.props.config.length).fill('')
    };
  }

  //updates this.state.formFieldsValues Array with current value of input fields, Array length is equal to objects quantity in config Array
  controlInputValue = (value, index) => {
    const updatedFormFieldsValues = this.state.formFieldsValues;
    updatedFormFieldsValues[index] = value;
    this.setState({ formFieldsValues: updatedFormFieldsValues });
  };

  handleSubmit = e => {
    e.preventDefault();
    //it always receives array of inputs values, this.props.validate is a function that comes from Login component or SignUp component
    const validationResult = this.props.validate(this.state.formFieldsValues);

    if (validationResult) {
      window.location = `${window.location.origin}`;
      console.log(`${window.location.origin}`);
    } else {
      return;
    }
  };

  //it creates initial FormFields basing on config objects Array passed as props
  componentDidMount() {
    const formFieldList = this.props.config.map((item, index) => {
      return (
        <FormField
          key={index}
          index={index}
          labelText={item.labelText}
          type={item.type}
          placeholder={item.placeholder}
          errorMessage={item.errorMessage}
          ref={item.reference}
          controlInputValue={this.controlInputValue}
        />
      );
    });
    this.setState({
      formFieldList
    });
  }

  render() {
    return (
      <form action="post" onSubmit={this.handleSubmit}>
        <h1 className="title is-3">{this.props.name}</h1>
        {this.state.formFieldList}
        {console.log(this.state.formFieldsValues)}

        <div className="control">
          <button className="button is-primary">Zaloguj</button>
        </div>
      </form>
    );
  }
}
