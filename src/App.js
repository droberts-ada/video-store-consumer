import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar';
import SearchContainer from './components/SearchContainer';
import LibraryContainer from './components/LibraryContainer';
import CustomersContainer from './components/CustomersContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  selectMovie = (movie) => {
    this.setState({
      movie
    })
  }

  selectCustomer = (customer) => {
    this.setState({
      customer
    })
  }

  render() {
    return (
      <div>
        <Route render={ () =>
            <NavBar
              selectedMovie={this.state.movie}
              selectedCustomer={this.state.customer} />
          } />
        <Route path='/search' component={SearchContainer}/>
        <Route path='/library'
          render={ () =>
            <LibraryContainer selectMovie={this.selectMovie} />
          } />
        <Route path='/customers' render={ () =>
            <CustomersContainer selectCustomer={this.selectCustomer} />
          } />
      </div>
    );
  }
}

export default App;
