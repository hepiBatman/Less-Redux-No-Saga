import React, { Component } from 'react';

const SearchView = ({onUpdateSearchByName, onUpdateSearchByAddress, onUpdateSearchBySubmissionId}) => (
  <div className="entry">
    <p>Filter by</p>
    <p>Name: <input type="text" onChange={(ev) => onUpdateSearchByName(ev.target.value)} /></p>
    <p>Address: <input type="text" onChange={(ev) => onUpdateSearchByAddress(ev.target.value)} /></p>
    <p>SubmissionId: <input type="text" onChange={(ev) => onUpdateSearchBySubmissionId(ev.target.value)} /></p>
  </div>
);

export default SearchView;
