import React, { Component } from 'react';

class ClientDetailView extends Component {
  state = {
    clientId: this.props.client.clientId,
    name: this.props.client.name,
    address: this.props.client.address,
  };

  onUpdateName = (name) => {
    this.setState({ name });
  };

  onUpdateAddress = (address) => {
    this.setState({ address });
  };

  onSubmit = () => {
    const {clientId, name, address} = this.state;
    this.props.onSubmit(clientId, name, address);
  };

  render() {
    const {clientId, name, address} = this.state;
    return (
      <div className="entry">
        <p>Detail</p>
        {clientId && <p>Client id: {clientId}</p>}
        <p>Name: <input type="text" onChange={(ev) => this.onUpdateName(ev.target.value) } value={name} /></p>
        <p>Address: <input type="text" onChange={(ev) => this.onUpdateAddress(ev.target.value) } value={address} /></p>
        <p>
          <button onClick={this.props.onBack}>Go Back</button>
          <button onClick={this.onSubmit}>Save</button>
        </p>
      </div>
    );
  }
}

export default ClientDetailView;
