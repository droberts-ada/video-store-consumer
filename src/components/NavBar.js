import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import NewRentalContainer from './NewRentalContainer';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='navbar__nav'>
          <Link to="/search" className='navbar__nav-item'>Search TMDB</Link>
          <Link to="/library" className='navbar__nav-item'>List Rental Library</Link>
          <Link to="/customers" className='navbar__nav-item'>List Customers</Link>
        </nav>

        <NewRentalContainer {...this.props} />

      </div>
    );
  }
}

export default NavBar;
