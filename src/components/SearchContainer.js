import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  searchMovieByTitle = (title) => {
    console.log(`searching for ${title}`);

    
    this.setState({
      movies: [
        {title: 'Movie 1'},
        {title: 'Movie 2'},
      ]
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchCallback={this.searchMovieByTitle} />
        <SearchResults movies={this.state.movies} />
      </div>
    );
  }
}

export default SearchContainer;
