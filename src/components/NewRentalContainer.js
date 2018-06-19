import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import RentalSelection from './RentalSelection';

import './NewRentalContainer.css'

const checkOutUrl = (title, customer_id) => {
  return `https://ada-video-store-api.herokuapp.com/rentals/${title}/check-out?customer_id=${customer_id};`
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
    setStatus: PropTypes.func.isRequired,
  }

  onCheckOutButtonClick = () => {
    console.log("Checking out rental");

    const movie = this.props.selectedMovie;
    const customer = this.props.selectedCustomer

    const url = checkOutUrl(movie.title, customer.id);
    axios.post(url)
      .then(() => {
        this.props.setStatus(
          `Successfully checked out ${movie.title} to ${customer.name}`,
          'success');
      })
      .catch((error) => {
        this.props.setStatus(
          `Could not check out ${movie.title} to ${customer.name}: ${error.message}`,
          'error');
      });

  }

  render() {
    const movieTitle = this.props.selectedMovie ? this.props.selectedMovie.title : 'None';
    const customerName = this.props.selectedCustomer ? this.props.selectedCustomer.name : 'None';

    return (
      <div className='new-rental'>
        <RentalSelection
          selectionType="Movie"
          name={movieTitle}
          />
        <RentalSelection
          selectionType="Customer"
          name={customerName}
          />
        <button
          className='new-rental__check-out-button header__item'
          onClick={this.onCheckOutButtonClick}>
          Check Out New Rental
        </button>
      </div>
    );
  }
}

export default NewRentalContainer;
