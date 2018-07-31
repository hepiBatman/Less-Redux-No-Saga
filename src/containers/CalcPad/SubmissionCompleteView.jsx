import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SubmissionCompleteView extends Component {

  render() {
    return (
      <div>
        <p>Submission is complete, your ref id: {this.props.refId}</p>
        <p><button onClick={this.props.onViewSubmissions}>View submissions</button></p>
      </div>
    );
  }
}

export default withRouter(SubmissionCompleteView);
