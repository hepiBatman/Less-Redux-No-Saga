import React, { Component } from 'react';

const AccountListView = ({accounts, onClickUpdate, onAddNew}) => {

  return (
    <div>
      <p>Accounts</p>
      { accounts && accounts.map((account, index) => (
        <div key={index} className="entry" onClick={() => onClickUpdate(account)}>Account id: {account.accountId} {JSON.stringify(account)}</div>
      ))}
      <button onClick={onAddNew}>+</button>
    </div>
  );
}

export default AccountListView;
