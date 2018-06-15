import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.image_url} />
      <h2>{props.title}</h2>
      <p>{props.release_date}</p>
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
