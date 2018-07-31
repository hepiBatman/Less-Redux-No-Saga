import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccountSelectorView extends Component {

  render() {
    return (
      <React.Fragment>
        <p>Accounts filter</p>
        <div>
          <input type="text" placeholder="filter" onChange={e => this.props.onFilterAccount(e.target.value)} />
        </div>
        <ul>
          { this.props.filteredAccounts.map((account, index) => {
            return <li key={index} onClick={() => this.props.selectAccount(account)}>AccId: {account.accountId}</li>
          }) }
        </ul>
        <div>
          <button onClick={this.props.goBack}>Back</button>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountSelectorView;
