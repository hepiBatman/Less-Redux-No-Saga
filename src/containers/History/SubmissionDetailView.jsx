import React, { Component } from 'react';

const SubmissionDetailView = ({submission, onBack, onAmend}) => {

  return (
    <div className="entry">
      <p>Detail</p>
      <p>Submission id: {submission.refId}</p>
      <p>Price: {submission.price}</p>
      <p>Unit: {submission.unit}</p>
      <p>Total: {submission.total}</p>
      <p>{JSON.stringify(submission)}</p>
      <p>
        <button onClick={onBack}>Go Back</button>
        <button onClick={() => onAmend(submission)}>Amend</button>
      </p>
    </div>
  );
}

export default SubmissionDetailView;
