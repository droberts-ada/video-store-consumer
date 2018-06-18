import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='navbar__nav'>
          <Link to="/search" className='navbar__nav-item'>Search TMDB</Link>
          <Link to="/library" className='navbar__nav-item'>List Rental Library</Link>
          <Link to="/customers" className='navbar__nav-item'>List Customers</Link>
        </nav>

      </div>
    );
  }
}

export default NavBar;
