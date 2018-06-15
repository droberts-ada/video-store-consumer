import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

const SearchResults = (props) => {
  const movieComponents = props.movies.map((movie, i) => {
    return (
      <Movie key={i}
        {...movie}
        buttonText="Add to Library"
        onButtonClick={props.addToLibraryCallback}
        />
    );
  });
  return (
    <div className="search-results">
      <ul>
        {movieComponents}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  movies: PropTypes.array.isRequired,
  addToLibraryCallback: PropTypes.func.isRequired
}

export default SearchResults
