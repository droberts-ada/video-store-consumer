import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar';
import SearchContainer from './components/SearchContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={NavBar}/>
        <Route path='/search' component={SearchContainer}/>
      </div>
    );
  }
}

export default App;
