import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as services from '../../services/services';

import NumberField from '../Common/NumberField';
import { CalcContext } from './CalcContext';

class CalcFormView extends Component {

  state = {
    price: null,
    priceError: '',
    unit: null,
    unitError: '',
    totalError: '',
    total: 0,
    submissionError: '',
    initPrice: null,
    initUnit: null,
  }

  componentDidMount() {
    console.log( 'CalcFormView.componentDidMount', this.props );
    if ( this.props.submission ) {
      const { price, unit } = this.props.submission;
      this.setState( {
        price,
        unit,
        initPrice: price,
        initUnit: unit,
      } );
    }
  }

  setPrice = ( price ) => {
    const total = this.recalculate( price, this.state.unit );
    this.setState( { price: Number( price ), total }, () => {
      this.validate();
    } );
  };

  setUnit = ( unit ) => {
    const total = this.recalculate( this.state.price, unit );
    this.setState( { unit: Number( unit ), total }, () => {
      this.validate();
    } );
  };

  recalculate = ( price, unit ) => {
    const total = Number( price * unit * this.props.calcInput.account.discount );
    return total;
  };

  validate = () => {
    const { price, unit, total } = this.state;

    let priceError = '';
    if ( price < 10 ) {
      priceError = 'Price must be at least $10';
    }

    let unitError = '';
    if ( unit < 1 ) {
      unitError = 'Units must be at least 1';
    }

    let totalError = '';
    if ( total < 100 ) {
      totalError = 'Total must be at least 100';
    }

    this.setState( { priceError, unitError, totalError } );
  };

  submit = () => {
    const { account, client } = this.props.calcInput;
    const { price, unit, total } = this.state;

    services.submitCalc( account, client, price, unit, total, ( refId, submissions ) => {
      this.props.updateSubmissions(submissions);
      this.props.setCompleteCalc( refId );
    }, ( submissionError ) => {
      this.setState( { submissionError } );
    } );
  };

  render() {
    const { initPrice, initUnit,
      price, unit, total, priceError, unitError, totalError, submissionError } = this.state;
    const showTotal = price > 0 && unit > 0 && !priceError && !unitError;
    const canSubmit = showTotal && !priceError && !unitError && !totalError;

    return (
      <div>
        <div>Calc for {this.props.calcInput.client.name}</div>
        <div>
          <label>Price</label>
          <NumberField key={initPrice} onChange={( value ) => {
            this.setPrice( value );
          }} initValue={initPrice} />
          {priceError && ( <small> {priceError}</small> )}
        </div>
        <div>
          <label>Unit</label>
          <NumberField key={initUnit} onChange={( value ) => {
            this.setUnit( value );
          }} initValue={initUnit} />
          {unitError && ( <small> {unitError}</small> )}
        </div>
        {totalError && <small> {totalError}</small>}
        {submissionError && <small> {submissionError}</small>}
        {showTotal &&
          <div>
            <p>Total value is: {total}</p>
          </div>
        }
        <div>
          <button onClick={this.props.goBack}>Back</button>
          {canSubmit && <button onClick={this.submit}>Submit</button>}
        </div>
      </div>
    );
  }
}

export default props => (
  <CalcContext.Consumer>
    {submission => <CalcFormView {...props} submission={submission} />}
  </CalcContext.Consumer>
);
