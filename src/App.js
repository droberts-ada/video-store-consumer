import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar';
import SearchContainer from './components/SearchContainer';
import LibraryContainer from './components/LibraryContainer';
import CustomersContainer from './components/CustomersContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={NavBar}/>
        <Route path='/search' component={SearchContainer}/>
        <Route path='/library' component={LibraryContainer}/>
        <Route path='/customers' component={CustomersContainer}/>
      </div>
    );
  }
}

export default App;
