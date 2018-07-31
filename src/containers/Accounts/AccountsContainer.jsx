import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import AccountListView from './AccountListView';
import AccountDetailView from './AccountDetailView';
import { setAccounts } from '../../actions/app';

class AccountsContainer extends Component {

  state = {
    page: 'list',
    account: null,
  };

  componentWillMount() {
    services.getAccounts(accounts => {
      this.props.setAccounts(accounts);
    });
  }

  onClickUpdate = (account) => {
    this.setState({ page: 'detail', account });
  };

  onAddNew = () => {
    this.setState({ page: 'detail', account: {} });
  };

  onBack = () => {
    this.setState({ page: 'list', account: null });
  };

  onSubmit = (accountId, discount) => {
    services.submitAccount(accountId, discount, (accounts) => {
      this.props.setAccounts(accounts);
      this.setState({ page: 'list' });
    });
  };

  render() {
    const {page, account} = this.state;

    return (
      <React.Fragment>
        {page === 'list' && <AccountListView accounts={this.props.accounts} onClickUpdate={this.onClickUpdate} onAddNew={this.onAddNew} />}
        {page === 'detail' && <AccountDetailView account={account} onSubmit={this.onSubmit} onBack={this.onBack} />}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  accounts: state.app.accounts,
});

export const mapDispatchToProps = dispatch => ({
  setAccounts: (accounts) => dispatch(setAccounts(accounts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);
