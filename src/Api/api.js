const remoteDB = {
  clients: [{
    clientId: '1',
    name: 'Bill',
    address: ''
  }, {
    clientId: '2',
    name: 'George',
    address: ''
  }],
  accounts: [{
    accountId: '123',
    discount: .2
  }, {
    accountId: '345',
    discount: .1
  }],
  submissions: []
};

export const submitCalc = (account, client, price, unit, total) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (price % 2 != 0) {
        const error = 'Server error';
        reject(error);
      }
      else {
        const refId = `${+new Date()}`;
        remoteDB.submissions.push({
          refId, accountId: account.accountId, clientId: client.clientId, price, unit, total
        });
        resolve(refId);
      }
    }, 50);
  });
};

export const submitClient = (clientId, name, address) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (clientId) {
        const client = remoteDB.clients.find(client => client.clientId === clientId);
        client.name = name;
        client.address = address;
      }
      else {
        remoteDB.clients.push({ clientId: `${new Date().getTime()}`, name, address });
      }
      resolve();
    }, 50);
  });
};

export const submitAccount = (accountId, discount) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (accountId) {
        const account = remoteDB.accounts.find(account => account.accountId === accountId);
        account.discount = discount;
      }
      else {
        remoteDB.accounts.push({ accountId: `${new Date().getTime()}`, discount });
      }
      resolve('ok');
    }, 50);
  });
};

export const getClient = (clientId, callback) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const result = remoteDB.clients.find(client => client.clientId === clientId);
      resolve(result);
    }, 50);
  });
}

export const getAccount = (accountId) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const result = remoteDB.accounts.find(account => account.accountId === accountId);
      resolve(result);
    }, 50);
  });
}

export const getClients = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const result = [...remoteDB.clients];
      resolve(result);
    }, 50);
  });
};

export const getAccounts = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const result = [...remoteDB.accounts];
      resolve(result);
    }, 50);
  });
};

export const getSubmissions = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const result = [...remoteDB.submissions];
      resolve(result);
    }, 50);
  });
};
