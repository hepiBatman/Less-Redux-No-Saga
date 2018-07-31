import React, { Component } from 'react';
import ClientSelectorView from './ClientSelectorView';
import AccountSelectorView from './AccountSelectorView';
import CalcFormView from './CalcFormView';
import SubmissionCompleteView from './SubmissionCompleteView';
import { withRouter } from 'react-router-dom';


const CalcView = ({page, goBack,
  filteredClients, onFilterClient, selectClient,
  filteredAccounts, onFilterAccount, selectAccount,
  calcInput, setCompleteCalc, updateSubmissions, refId, onViewSubmissions,
  submission}) => (
  <div className="frame">
    { page === 'ClientSelector' &&
          <ClientSelectorView
                filteredClients={filteredClients}
                onFilterClient={onFilterClient}
                selectClient={selectClient}
                goBack={goBack} /> }
    { page === 'AccountSelector' &&
          <AccountSelectorView
                filteredAccounts={filteredAccounts}
                onFilterAccount={onFilterAccount}
                selectAccount={selectAccount}
                goBack={goBack} /> }
    { page === 'CalcForm' && <CalcFormView calcInput={calcInput} submission={submission}
                setCompleteCalc={setCompleteCalc} updateSubmissions={updateSubmissions} goBack={goBack} /> }
    { page === 'SubmissionComplete' && <SubmissionCompleteView refId={refId} onViewSubmissions={onViewSubmissions} /> }
  </div>
);

export default withRouter(CalcView);
