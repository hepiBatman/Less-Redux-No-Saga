import React, { Component } from 'react';

const ClientListView = ({clients, onClickUpdate, onAddNew}) => {
  return (
    <div>
      <p>Clients</p>
      { clients.map((client, index) => (
        <div key={index} className="entry" onClick={() => onClickUpdate(client)}>Client id: {client.clientId} {JSON.stringify(client)}</div>
      ))}
      <button onClick={onAddNew}>+</button>
    </div>
  );
}

export default ClientListView;
