import axios from 'axios';
import React from 'react';

import ItemList from './ItemList';
import Movie from './Movie';

const LIBRARY_URL = 'http://localhost:3000/movies'

class LibraryContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get(LIBRARY_URL)
      .then((response) => {
        console.log(response);
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        console.log('failure response');
        console.log(error);
      });
  }

  buttonClickHandler = (movie) => {
    console.log('Movie selected');
    console.log(movie);
  }

  render() {
    return (
      <div className="library-container">
        <ItemList
          items={this.state.movies}
          ItemComponent={Movie}
          buttonText="Select for Rental"
          buttonClickHandler={this.selectMovie}
          />
      </div>
    );
  }
}

export default LibraryContainer;
