import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../services/services';
import { setClients, setAccounts, setSubmissions } from '../actions/app';

class InitContainer extends Component {
  componentWillMount() {
    console.log('componentWillMount ....');
    services.initApp((clients, accounts, submissions) => {
      this.props.setClients(clients);
      this.props.setAccounts(accounts);
      this.props.setSubmissions(submissions);
    });
  }

  render() {
    return (null);
  }
}

export const mapDispatchToProps = dispatch => ({
  setClients: (clients) => dispatch(setClients(clients)),
  setAccounts: (accounts) => dispatch(setAccounts(accounts)),
  setSubmissions: (submissions) => dispatch(setSubmissions(submissions)),
});

export default connect(null, mapDispatchToProps)(InitContainer);
