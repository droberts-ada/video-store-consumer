import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired
}

export default Movie;
