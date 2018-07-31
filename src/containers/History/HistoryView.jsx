import React, { Component } from 'react';

const HistoryView = ({submissions, onClickSubmission}) => {

  return (
    <div>
      <p>Submissions</p>
      { submissions.map((submission, index) => (
        <div key={index} className="entry" onClick={() => onClickSubmission(submission)}>
          Submission id: {submissions.id} {JSON.stringify(submission)}</div>
      ))}
    </div>
  );
}

export default HistoryView;
