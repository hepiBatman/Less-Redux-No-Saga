import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import PropTypes from 'prop-types';
import CalcContainer from './CalcContainer';
import Notifier from '../../util/Notifier';


class CalcParentContainer extends Component {

  state = {
    calcKey: null,
    submission: null
  };

  componentWillMount() {
    Notifier.subscribe('ResetCalc', (submission) => {
      console.log('Recreating calcContainer');
      this.setState({ calcKey: +new Date(), submission});
    });
  }

  render() {
    const {calcKey} = this.state;

    return (
      calcKey && <CalcContainer key={this.state.calcKey} submission={this.state.submission} />
    );
  }

}

export default connect(null, null)(CalcParentContainer);
