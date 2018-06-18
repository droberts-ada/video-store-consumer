import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import searchIcon from '../images/magnifying-glass-search.svg';
import libraryIcon from '../images/film-reel.svg';
import customersIcon from '../images/people.svg';

import NewRentalContainer from './NewRentalContainer';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='navbar__nav'>
          <Link to="/search" className='navbar__nav-item'>
            <img className="navbar__icon"
              src={searchIcon} />
            <label>Search</label>
          </Link>
          <Link to="/library" className='navbar__nav-item'>
            <img className="navbar__icon"
              src={libraryIcon} />
            <label>Library</label>
          </Link>
          <Link to="/customers" className='navbar__nav-item'>
            <img className="navbar__icon"
              src={customersIcon} />
            <label>Customers</label>
          </Link>
        </nav>

        <NewRentalContainer {...this.props} />

      </div>
    );
  }
}

export default NavBar;
