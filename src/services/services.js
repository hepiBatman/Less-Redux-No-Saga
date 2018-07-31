import "regenerator-runtime/runtime";
import * as api from '../Api/api';

export const initApp = async (callback) => {
  // TODO: you can use Promise.all instead
  const clients = await api.getClients();
  const accounts = await api.getAccounts();
  const submissions = await api.getSubmissions();

  callback(clients, accounts, submissions);
}

export const submitCalc = async (account, client, price, unit, total, callback, errorCallback) => {
  try {
    const refId = await api.submitCalc(account, client, price, unit, total);
    const submissions = await api.getSubmissions();
    callback(refId, submissions);
  }
  catch (e) {
    errorCallback(e);
  }
}

export const submitAccount = async (accountId, discount, callback) => {
  await api.submitAccount(accountId, discount);
  const accounts = await api.getAccounts();
  callback(accounts);
};

export const submitClient = async (clientId, name, address, callback) => {
  await api.submitClient(clientId, name, address);
  const clients = await api.getClients();
  callback(clients);
};

export const awaitGetClient = async (clientId) => (
  await api.getClient(clientId)
);

export const awaitGetAccount = async (accountId) => (
  await api.getAccount(accountId)
);

export const getClients = async (callback) => {
  const clients = await api.getClients();
  callback(clients);
};

export const getAccounts = async (callback) => {
  const accounts = await api.getAccounts();
  callback(accounts);
};

export const getSubmissions = async (callback) => {
  const submissions = await api.getSubmissions();
  callback(submissions);
};
