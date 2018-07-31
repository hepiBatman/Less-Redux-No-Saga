import React, { Component } from 'react';

class AppContainer extends Component {

  render() {
    return (
      <div>
        <p>
        The purpose is to illustrate you can build large scale React.JS app by using less Redux,
        </p>
        <p>
        ie. <b>just store data from Api call, NOT inflight data</b>
        </p>
        <p>Api-Server  -->  Redux</p>
        <p>Redux  -->  Screen</p>
        <p>Screen  -->  Api-Server</p>
      </div>
    );
  }
}

export default AppContainer;
