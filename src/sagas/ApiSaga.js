// import { put, call, takeEvery } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
// import Types from '../constants/action-types';
// import * as Actions from '../actions/app';
//
//
// export default (Api) => {
//   function* getClients() {
//     const response = yield call(Api.getClients);
//     yield put(Actions.setClients(response));
//   }
//
//   function* getAccounts() {
//     const response = yield call(Api.getAccounts);
//     yield put(Actions.setAccounts(response));
//   }
//
//   function* getSubmissions() {
//     const response = yield call(Api.getSubmissions);
//     yield put(Actions.setSubmissions(response));
//   }
//
//   function* worker(action) {
//     try {
//       if (action.type === Types.GET_CLIENTS) {
//         yield getClients();
//       }
//       else if (action.type === Types.GET_ACCOUNTS) {
//         yield getAccounts();
//       }
//       else if (action.type === Types.GET_SUBMISSIONS) {
//         yield getSubmissions();
//       }
//       else if (action.type === Types.SUBMIT_CLIENT) {
//         const {clientId, name, address} = action;
//         const response = yield call(Api.submitClient, clientId, name, address);
//
//         yield getClients();
//         yield put(push('/clients'));
//       }
//       else if (action.type === Types.SUBMIT_ACCOUNT) {
//         const {accountId, discount} = action;
//         yield call(Api.submitAccount, accountId, discount);
//         observer.publish('exampleEvent', 1+9);
//
//         //yield getAccounts();
//         // yield put(push('/clients'));
//       }
//       else if (action.type === Types.SUBMIT_CALC) {
//         const {account, client, price, unit, total} = action;
//         yield call(Api.submitCalc, account, client, price, unit, total);
//
//         yield getSubmissions();
//         yield put(push('/history'));
//       }
//     }
//     catch (e) {
//       console.log('error', e);
//     }
//   }
//
//   function* watcher() {
//     yield takeEvery([
//       Types.GET_CLIENTS,
//       Types.GET_ACCOUNTS,
//       Types.GET_SUBMISSIONS,
//       Types.SUBMIT_CLIENT,
//       Types.SUBMIT_ACCOUNT,
//       Types.SUBMIT_CALC,
//     ], worker);
//   }
//
//   return {
//     worker,
//     watcher,
//   };
// };
