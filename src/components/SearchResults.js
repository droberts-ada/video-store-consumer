import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

const SearchResults = (props) => {
  const movieComponents = props.movies.map((movie, i) => {
    return (<Movie key={i} {...movie} />);
  });
  return (
    <ul>
      {movieComponents}
    </ul>
  );
}

SearchResults.propTypes = {
  movies: PropTypes.array.isRequired
}

export default SearchResults
