import React from 'react';

export default class FormField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorMessage: false, inputDanger: null };
  }

  flipError = validationResult => {
    if (validationResult) {
      this.setState({
        errorMessage: true,
        inputDanger: 'is-danger'
      });
    } else {
      this.setState({
        errorMessage: false,
        inputDanger: ''
      });
    }
  };

  isError = () => {
    if (this.state.errorMessage)
      return <p className="help is-danger">{this.props.errorMessage}</p>;
  };

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.labelText}</label>
        <div className="control">
          <input
            className={`input ${this.state.inputDanger}`}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={e =>
              this.props.controlInputValue(e.target.value, this.props.index)
            }
          />
          {this.isError()}
        </div>
      </div>
    );
  }
}
