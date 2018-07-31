import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as services from '../../services/services';

import HistoryView from './HistoryView';
import SubmissionDetailView from './SubmissionDetailView';
import { setSubmissions } from '../../actions/app';
import Notifier from '../../util/Notifier';

class HistoryContainer extends Component {

  // state = {
  //   submission: null,
  // };

  componentWillMount() {
    services.getSubmissions( submissions => {
      this.props.setSubmissions( submissions );
    } );
  }

  onClickSubmission = ( submission ) => {
    this.props.history.push( {
      pathname: `/detail/${submission.refId}`,
      state: { submission }
    } );
  };

  onBack = () => {
    this.setState( { page: 'history', submission: null } );
  };

  onAmend = ( submission ) => {
    Notifier.publish( 'ResetCalc', submission );
  };

  render() {
    console.log('this.props.submissions', this.props.submissions);
    return (
      <React.Fragment>
        <HistoryView submissions={this.props.submissions} onClickSubmission={this.onClickSubmission} />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  console.log('HistoryContainer.mapStateToProps', state.app.submissions);
  return ( {
    submissions: state.app.submissions,
  } );
};

export const mapDispatchToProps = dispatch => ( {
  setSubmissions: ( submissions ) => dispatch( setSubmissions( submissions ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( HistoryContainer );
