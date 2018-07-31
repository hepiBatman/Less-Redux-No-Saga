import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchView from './SearchView';
import SearchResultView from './SearchResultView';
// import * as Api from '../Api/api';
import { toDetailSubmissions } from './Helper';

class SearchContainer extends Component {

  state = {
    searchByName: '',
    searchByAddress: '',
    searchBySubmissionId: '',

    key: new Date().getTime(),
    result: [],
  };

  componentWillMount() {
    console.log( 'SearchContainer ...' );
    // const list = mockReducer.submissions.map(submission => {
    //   return {...submission};
    // });
    //
    // this.setState({
    //   result: list
    // });
  }

  onUpdateSearchByName = ( searchByName ) => {
    this.setState( { searchByName } );
    // const {searchByAddress, searchBySubmissionId} = this.state;
    // const result = this.filterResult(searchByName, searchByAddress, searchBySubmissionId);
    // this.setState({ searchBySubmissionId, result, key: new Date().getTime() });
  };

  onUpdateSearchByAddress = ( searchByAddress ) => {
    this.setState( { searchByAddress } );
    // const {searchByName, searchBySubmissionId} = this.state;
    // const result = this.filterResult(searchByName, searchByAddress, searchBySubmissionId);
    // this.setState({ searchBySubmissionId, result, key: new Date().getTime() });
  };

  onUpdateSearchBySubmissionId = ( searchBySubmissionId ) => {
    this.setState( { searchBySubmissionId } );
    // const {searchByName, searchByAddress} = this.state;
    // const result = this.filterResult(searchByName, searchByAddress, searchBySubmissionId);
    // this.setState({ searchBySubmissionId, result, key: new Date().getTime() });
  };

  filterResult = ( searchByName, searchByAddress, searchBySubmissionId ) => {
    console.log( 'this.props.submissions', this.props.submissions );
    return this.props.submissions.filter( submission => {
      if ( searchBySubmissionId && submission.refId !== searchBySubmissionId ) {
        console.log( 'skip ', submission.refId );
        return;
      }

      console.log( 'xxx', ( submission.client ), ( searchByName ) );
      if ( submission.client && searchByName ) {
        console.log( 'yyy', ( submission.client.name.toLowerCase().includes( searchByName ) ) );
        const isIn = submission.client.name.toLowerCase().includes( searchByName );
        if ( !isIn ) {
          return false;
        }
      }

      if ( submission.client && searchByAddress ) {
        const isIn = submission.client.address.toLowerCase().includes( searchByAddress );
        if ( !isIn ) {
          return false;
        }
      }

      return true;
    } );
    // const filteredClients =  mockReducer.clients.filter(client => {
    //   let isIncluded = true;
    //   if (searchByName !== '') {
    //     isIncluded = client.name.toLowerCase().includes(searchByName);
    //   }
    //
    //   if (isIncluded && searchByAddress !== '') {
    //     isIncluded = client.address.toLowerCase().includes(searchByAddress);
    //   }
    //
    //   return isIncluded;
    // });
    //
    // if (filteredClients && filteredClients.length > 0) {
    //   return mockReducer.submissions.filter(submission => {
    //     let isIncluded = true;
    //     if (searchBySubmissionId !== '') {
    //       isIncluded = submission.refId.includes(searchBySubmissionId);
    //     }
    //
    //     if (isIncluded) {
    //       if (searchByName !== '' || searchByAddress !== '') {
    //         isIncluded = false;
    //         for (let i = 0; i < filteredClients.length; i++) {
    //           if (submission.clientId === filteredClients[i].clientId) {
    //             isIncluded = true;
    //             break;
    //           }
    //         }
    //       }
    //     }
    //     return isIncluded;
    //   });
    // }

    return [];
  };

  onClickDetail = ( submission ) => {
    // Api.getClient(submission.clientId, (client) => {
    //   submission.client = client;
    //   this.setState({ key: new Date().getTime() });
    // });
    // Api.getAccount(submission.accountId, (account) => {
    //   submission.account = account;
    //   this.setState({ key: new Date().getTime() });
    // });
  };

  render() {
    // const {key, result} = this.state;
    const { searchByName, searchByAddress, searchBySubmissionId } = this.state;
    const result = this.filterResult( searchByName, searchByAddress, searchBySubmissionId );
    console.log( 'result', result );

    return (
      <React.Fragment>
        <SearchView onUpdateSearchByName={this.onUpdateSearchByName}
          onUpdateSearchByAddress={this.onUpdateSearchByAddress}
          onUpdateSearchBySubmissionId={this.onUpdateSearchBySubmissionId} />
        <SearchResultView result={result} onClickDetail={this.onClickDetail} />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return ( {
    submissions: toDetailSubmissions( state.app.submissions, state.app.accounts, state.app.clients )
  } );
};

export const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( SearchContainer );
