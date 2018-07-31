import { GET_CLIENTS, GET_ACCOUNTS, GET_SUBMISSIONS,
  SET_CLIENTS, SET_ACCOUNTS, SET_SUBMISSIONS,
  SUBMIT_CLIENT, SUBMIT_ACCOUNT, SUBMIT_CALC } from 'constants/action-types';

const getClients = () => ({
  type: GET_CLIENTS,
});

const getAccounts = () => ({
  type: GET_ACCOUNTS,
});

const getSubmissions = () => ({
  type: GET_SUBMISSIONS,
});

const setClients = (clients) => ({
  type: SET_CLIENTS,
  clients,
});

const setAccounts = (accounts) => ({
  type: SET_ACCOUNTS,
  accounts
});

const setSubmissions = (submissions) => ({
  type: SET_SUBMISSIONS,
  submissions
});

const submitClient = (clientId, name, address) => ({
  type: SUBMIT_CLIENT,
  clientId, name, address
});

const submitAccount = (accountId, discount) => ({
  type: SUBMIT_ACCOUNT,
  accountId, discount
});

const submitCalc = (account, client, price, unit, total) => ({
  type: SUBMIT_CALC,
  account, client, price, unit, total
});

export { getClients, getAccounts, getSubmissions,
  setClients, setAccounts, setSubmissions,
  submitClient, submitAccount, submitCalc };
