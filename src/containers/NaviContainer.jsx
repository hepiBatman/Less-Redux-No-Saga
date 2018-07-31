import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchContainer from './Search/SearchContainer'
import Notifier from '../util/Notifier';

class NavItemView extends Component {
  render() {
    const { isActive, label, link } = this.props;
    return (
      <li className={`nav ${isActive ? 'active' : ''}`}>
        <Link to={link}>{label}</Link>
      </li>
    );
  }
}

class NaviContainer extends Component {

  state = {
    search: false
  };

  toggleSearch = () => {
    this.setState( { search: !this.state.search } );
  };

  onNewCalc = () => {
    Notifier.publish( 'ResetCalc' );
  };

  render() {
    return (
      <React.Fragment>
        <ul className="nav-bar">
          <NavItemView label="Home" link="/" />
          <NavItemView label="Accounts" link="/accounts" />
          <NavItemView label="Clients" link="/clients" />
          <NavItemView label="History" link="/history" />

          <button onClick={this.onNewCalc}>New Calc</button>
        </ul>

        <div className="search-frame">
          <button onClick={this.toggleSearch}>Search</button>
          {this.state.search && <SearchContainer />}
        </div>
      </React.Fragment>
    );
  }
}

export default NaviContainer;
