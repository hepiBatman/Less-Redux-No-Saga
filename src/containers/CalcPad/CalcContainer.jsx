import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import PropTypes from 'prop-types';
import CalcView from './CalcView';
// import Notifier from '../../util/Notifier';
import { withRouter } from 'react-router-dom';
import { CalcContext } from './CalcContext';
import { setSubmissions } from '../../actions/app';


class CalcContainer extends Component {

  state = {
    page: 'ClientSelector',
    filterByClient: '',
    filterByAccount: '',
    selectedClient: null,
    selectedAccount: null,
    refId: '',
    hide: true,
    submission: null,
  };

  componentDidMount() {
    const { submission } = this.props;
    if ( submission ) {
      const selectedClient = this.props.clients.find( client => client.clientId === submission.clientId );
      const selectedAccount = this.props.accounts.find( account => account.accountId === submission.accountId );
      console.log( 'selectedClient', selectedClient );
      console.log( 'selectedAccount', selectedAccount );
      this.setState( {
        page: 'CalcForm',
        selectedClient,
        selectedAccount,
        hide: false,
        submission,
      } );
    }
    else {
      this.setState( {
        page: 'ClientSelector',
        selectedClient: null,
        selectedAccount: null,
        hide: false,
      } );
    }

    // Notifier.subscribe('openSubmission', (submission) => {
    //   if (submission) {
    //     const selectedClient = this.props.clients.find(client => client.clientId === submission.clientId);
    //     const selectedAccount = this.props.accounts.find(account => account.accountId === submission.accountId);
    //     console.log('selectedClient', selectedClient);
    //     console.log('selectedAccount', selectedAccount);
    //     this.setState({
    //       page: 'CalcForm',
    //       selectedClient,
    //       selectedAccount,
    //       hide: false,
    //       submission,
    //     });
    //   }
    //   else {
    //     this.setState({
    //       page: 'ClientSelector',
    //       selectedClient: null,
    //       selectedAccount: null,
    //       hide: false,
    //     });
    //   }
    // });
    // if (this.props.location.state && this.props.location.state.submission) {
    // }
  }

  // componentWillUnmount() {
  //   Notifier.unsubscribe('openSubmission');
  // }

  onFilterClient = ( filterByClient ) => {
    this.setState( { filterByClient } );
  };

  selectClient = ( selectedClient ) => {
    this.setState( { selectedClient, page: 'AccountSelector' } );
  };

  onFilterAccount = ( filterByAccount ) => {
    this.setState( { filterByAccount } );
  };

  selectAccount = ( selectedAccount ) => {
    this.setState( { selectedAccount, page: 'CalcForm' } );
  };

  setCompleteCalc = ( refId ) => {
    this.setState( { refId, page: 'SubmissionComplete' } );
  };

  goBack = () => {
    if ( this.state.page === 'ClientSelector' ) {
      this.setState( { page: 'ClientSelector' } );
    }
    else if ( this.state.page === 'AccountSelector' ) {
      this.setState( { selectedClient: null, page: 'ClientSelector' } );
    }
    else if ( this.state.page === 'CalcForm' ) {
      this.setState( { selectedAccount: null, page: 'AccountSelector' } );
    }
  };

  filterClients = () => {
    if ( this.state.filterByClient === '' ) {
      return this.props.clients;
    }

    return this.props.clients.filter( client => client.name.toLowerCase().includes( this.state.filterByClient ) );
  };

  filterAccounts = () => {
    if ( this.state.filterByAccount === '' ) {
      return this.props.accounts;
    }

    return this.props.accounts.filter( account => account.accountId.toLowerCase().includes( this.state.filterByAccount ) );
  };

  setCompleteCalc = ( refId ) => {
    this.setState( { page: 'SubmissionComplete', refId } );
  };

  onViewSubmissions = () => {
    this.setState( { hide: true } );
    this.props.history.push( '/history' );
  };

  onHide = () => {
    this.setState( { hide: true } );
  }

  render() {
    const filteredClients = this.filterClients();
    const filteredAccounts = this.filterAccounts();
    const { selectedClient, selectedAccount, hide, submission } = this.state;

    const calcInput = {
      client: selectedClient, account: selectedAccount
    };

    return (
      <CalcContext.Provider value={submission}>
        <div className={`calc-frame-overlay ${hide ? 'hide' : ''}`}>
        </div>
        <div className={`calc-frame ${hide ? 'hide' : ''}`}>
          <p>Client: {selectedClient && selectedClient.name}, Account: {selectedAccount && selectedAccount.accountId}
            <button onClick={this.onHide}>&times;</button></p>
          <CalcView page={this.state.page} onOpenExit={this.onOpenExit} goBack={this.goBack} calcInput={calcInput}
            onFilterClient={this.onFilterClient} selectClient={this.selectClient} filteredClients={filteredClients}
            onFilterAccount={this.onFilterAccount} selectAccount={this.selectAccount} filteredAccounts={filteredAccounts}
            setCompleteCalc={this.setCompleteCalc} updateSubmissions={this.props.updateSubmissions}
            refId={this.state.refId} onViewSubmissions={this.onViewSubmissions}
            submission={submission}
          />
        </div>
      </CalcContext.Provider>
    );
  }
}

export const mapStateToProps = state => ( {
  clients: state.app.clients,
  accounts: state.app.accounts,
} );

export const mapDispatchToProps = dispatch => ( {
  updateSubmissions: ( submissions ) => dispatch( setSubmissions( submissions ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( CalcContainer ) );
