import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NumberField extends Component {

  state = {
    inputValue: null,
    value: null
  };

  componentWillMount() {
    this.setState({ inputValue: this.props.initValue, value: Number(this.props.initValue) });
  }

  onChange = (e) => {
    const inputValue = e.target.value;
    const value = Number(inputValue);
    this.setState({ inputValue, value });
    this.props.onChange(value);
  };

  render() {
    return (
      <input type="text" value={this.state.inputValue} onChange={this.onChange} />
    );
  }
}

export default NumberField;
