import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css';
import './Item.css';

const Customer = (props) => {
  return (
    <div className="customer item">
      <div className="item__details">
        <h2>{props.name}</h2>
        <p>{props.phone_number}</p>
        <p>{props.movies_checked_out_count} movies checked out</p>
      </div>
      <button className="item__button"
        onClick={() => props.onButtonClick(props.id)}>
        {props.buttonText}
      </button>
    </div>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone_number: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Customer;
