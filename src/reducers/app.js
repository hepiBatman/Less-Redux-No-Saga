import Types from '../constants/action-types';

const initialState = {
  clients: [],
  accounts: [],
  submissions: [],
};

export default function app(state = initialState, action) {
  if (action.type === Types.SET_CLIENTS) {
    return { ...state, clients: action.clients };
  }
  else if (action.type === Types.SET_ACCOUNTS) {
    return { ...state, accounts: action.accounts };
  }
  else if (action.type === Types.SET_SUBMISSIONS) {
    console.log('action.submissions', action.submissions);
    return { ...state, submissions: action.submissions };
  }

  return state;
}
