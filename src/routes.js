import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'containers/layout';

import InitContainer from 'containers/InitContainer'
import NaviContainer from 'containers/NaviContainer'
import App from 'containers/app'
import AccountsContainer from 'containers/Accounts/AccountsContainer'
import ClientsContainer from 'containers/Clients/ClientsContainer'
import SearchContainer from 'containers/Search/SearchContainer'
import HistoryContainer from 'containers/History/HistoryContainer'
import SubmissionDetailContainer from 'containers/History/SubmissionDetailContainer'
import CalcParentContainer from 'containers/CalcPad/CalcParentContainer'


const routes = (
  <Router>
    <React.Fragment>
      <Route component={InitContainer} />
      <Route component={NaviContainer} />
      <Route component={CalcParentContainer} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/accounts" component={AccountsContainer} />
        <Route path="/clients" component={ClientsContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/history" component={HistoryContainer} />
        <Route path="/detail/:refId" component={SubmissionDetailContainer} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default routes;
