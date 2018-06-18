import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './NewRentalContainer.css'

const checkOutUrl = (title, customer_id) => {
  return `http://localhost:3000/rentals/${title}/check-out?customer_id=${customer_id};`
}

class NewRentalContainer extends Component {
  static propTypes = {
    selectedMovie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    selectedCustomer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }

  onCheckOutButtonClick = () => {
    console.log("Checking out rental");

    const url = checkOutUrl(this.props.selectedMovie.title, this.props.selectedCustomer.id);
    axios.post(url)
      .then((response) => {
        console.log("Successfully checked out");
      })
      .catch((error) => {
        console.log("Failed to check out");
        console.log(error);
      });

  }

  render() {
    const movieTitle = this.props.selectedMovie ? this.props.selectedMovie.title : 'None';
    const customerName = this.props.selectedCustomer ? this.props.selectedCustomer.name : 'None';

    return (
      <div className='new-rental'>
        <p className='new-rental__movie-selection'>
          Selected Movie: {movieTitle}
        </p>
        <p className='new-rental__customer-selection'>
          Selected Customer: {customerName}
        </p>
        <button className='new-rental__check-out-button'
          onClick={this.onCheckOutButtonClick}>
          Check Out New Rental
        </button>
      </div>
    );
  }
}

export default NewRentalContainer;
