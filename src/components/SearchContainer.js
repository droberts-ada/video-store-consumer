import React from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SEARCH_URL = 'http://localhost:3000/movies?query=';

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

  addMovieToLibrary = (movieId) => {
    const movie = this.state.movies.find(movie => movie.external_id === movieId);

    console.log(`Adding movie ${movie.title} to library`);
    // TODO: actually add the movie
  }

  render() {
    return (
      <div className="item-list">
        <SearchBar searchCallback={this.searchMovieByTitle} />
        <SearchResults
          movies={this.state.movies}
          addToLibraryCallback={this.addMovieToLibrary}
          />
      </div>
    );
  }
}

export default SearchContainer;
