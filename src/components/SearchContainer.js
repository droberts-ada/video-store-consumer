import React from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import ItemList from './ItemList';
import Movie from './Movie';

const SEARCH_URL = 'http://localhost:3000/movies?query=';
const ADD_URL = 'http://localhost:3000/movies';

class SearchContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  searchMovieByTitle = (title) => {
    console.log(`searching for ${title}`);

    axios.get(SEARCH_URL + title)
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

  addMovieToLibrary = (external_id) => {
    const movie = this.state.movies.find(movie => movie.external_id === external_id);

    console.log(`Adding movie ${movie.title} to library`);

    const url = ADD_URL + '?external_id=' + external_id;
    axios.post(url)
      .then((response) => {
        console.log('added movie successfully!');
      })
      .catch((error) => {
        console.log('failure response');
        console.log(error);
      });
  }

  render() {
    return (
      <div className="item-list">
        <SearchBar searchCallback={this.searchMovieByTitle} />
        <ItemList
          items={this.state.movies}
          ItemComponent={Movie}
          buttonText="Add to library"
          buttonClickHandler={this.addMovieToLibrary}
          />
      </div>
    );
  }
}

export default SearchContainer;
