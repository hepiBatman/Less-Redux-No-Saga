import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import HistoryView from './HistoryView';
import SubmissionDetailView from './SubmissionDetailView';
import { setSubmissions } from '../../actions/app';
import Notifier from '../../util/Notifier';

class SubmissionDetailContainer extends Component {

  state = {
    submission: null,
  };

  componentWillMount() {
    const submission = this.props.submissions.find(submission => submission.refId === this.props.location.state.submission.refId);
    this.setState({submission});
  }

  onBack = () => {
    this.props.history.push( {
      pathname: '/history',
    } );
  };

  onAmend = (submission) => {
    Notifier.publish('ResetCalc', submission);
  };

  render() {
    const {page, submission} = this.state;

    return (
      <React.Fragment>
        <SubmissionDetailView submission={submission} onBack={this.onBack} onAmend={this.onAmend} />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return ({
    submissions: state.app.submissions,
  });
};

export const mapDispatchToProps = dispatch => ({
  setSubmissions: (submissions) => dispatch(setSubmissions(submissions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionDetailContainer);
