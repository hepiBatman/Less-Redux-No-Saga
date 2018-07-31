import React, { Component } from 'react';

class SearchResultView extends Component {

  state = {
    submissions: this.props.result,
  };

  onClickDetail = (submission) => {
    console.log('submission', submission);
    this.props.onClickDetail(submission);
  };

  render() {
    const {result} = this.props;
    return (
      <div>
        <p>Result</p>
        { result && result.map((submission, key) => (
          <div key={key} className="entry">
          <p onClick={() => this.onClickDetail(submission)}>{JSON.stringify(submission)}</p>
          { submission.account && (
            <div className="entry">
              <p>{JSON.stringify(submission.account)}</p>
            </div>
          )}
          { submission.client && (
            <div className="entry">
              <p>{JSON.stringify(submission.client)}</p>
            </div>
          )}
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResultView;
