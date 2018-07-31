import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClientSelectorView extends Component {

  render() {
    return (
      <React.Fragment>
        <p>Clients filter</p>
        <div>
          <input type="text" placeholder="filter" onChange={e => this.props.onFilterClient(e.target.value)} />
        </div>
        <ul>
          { this.props.filteredClients.map((client, index) => {
            return <li key={index} onClick={() => this.props.selectClient(client)}>{client.name}</li>
          }) }
        </ul>
        <div>
          <button onClick={this.props.goBack}>Back</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientSelectorView;
