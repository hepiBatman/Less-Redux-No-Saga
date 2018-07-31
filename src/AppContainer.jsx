import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';
import './App.css';


class AppContainer extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          {routes}
        </React.Fragment>
      </Provider>
    );
  }
}

export default AppContainer;
