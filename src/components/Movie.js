import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {
  return (
    <div className="movie item">
      <img src={props.image_url} />
      <div className="details">
        <h2>{props.title}</h2>
        <p>{props.release_date}</p>
      </div>
      <button onClick={() => props.onButtonClick(props.external_id)}>
        {props.buttonText}
      </button>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  release_date: PropTypes.string,
  external_id: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Movie;
