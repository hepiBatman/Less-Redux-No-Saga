import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import ClientListView from './ClientListView';
import ClientDetailView from './ClientDetailView';
import { setClients } from '../../actions/app';

class ClientsContainer extends Component {

  state = {
    page: 'list',
    client: null,
  };

  componentDidMount() {
    services.getClients(clients => {
      this.props.setClients(clients);
    });
  }

  onClickUpdate = (client) => {
    this.setState({ page: 'detail', client });
  };

  onAddNew = () => {
    this.setState({ page: 'detail', client: {} });
  };

  onBack = () => {
    this.setState({ page: 'list', client: null });
  };

  onSubmit = (clientId, name, address) => {
    services.submitClient(clientId, name, address, (clients) => {
      this.props.setClients(clients);
      this.setState({ page: 'list' });
    });
  };

  render() {
    const {page, client} = this.state;

    return (
      <React.Fragment>
        {page === 'list' && <ClientListView clients={this.props.clients} onClickUpdate={this.onClickUpdate} onAddNew={this.onAddNew} />}
        {page === 'detail' && <ClientDetailView client={client} onSubmit={this.onSubmit} onBack={this.onBack} />}
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  clients: state.app.clients,
});

export const mapDispatchToProps = dispatch => ({
  setClients: (clients) => dispatch(setClients(clients)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
