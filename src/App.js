import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar';
import NewRentalContainer from './components/NewRentalContainer';
import StatusBar from './components/StatusBar';
import SearchContainer from './components/SearchContainer';
import LibraryContainer from './components/LibraryContainer';
import CustomersContainer from './components/CustomersContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: {
        message: '',
      }
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

  setStatus = (message, type) => {
    this.setState({
      status: { message, type }
    });
  }

  clearStatus = () => {
    this.setState({ status: { message: '' }})
  }

  render() {
    return (
      <div className="video-store">
        <Route render={ () => (
            <header className="header">
              <div className="header__controls">
                <NavBar />
                <NewRentalContainer
                  selectedMovie={this.state.movie}
                  selectedCustomer={this.state.customer}
                  setStatus={this.setStatus}
                  />
              </div>
              <StatusBar
                {...this.state.status}
                clearStatus={this.clearStatus}
                />
            </header>
          )}
          />
        <Route path={process.env.PUBLIC_URL + '/search'} render={ () =>
            <SearchContainer setStatus={this.setStatus} />
          }
          />
        <Route path={process.env.PUBLIC_URL + '/library'}
          render={ () =>
            <LibraryContainer
              selectMovie={this.selectMovie}
              setStatus={this.setStatus}
              />
          }
          />
        <Route path={process.env.PUBLIC_URL + '/customers'} render={ () =>
            <CustomersContainer
              selectCustomer={this.selectCustomer}
              setStatus={this.setStatus}
              />
          }
          />
      </div>
    );
  }
}

export default App;
