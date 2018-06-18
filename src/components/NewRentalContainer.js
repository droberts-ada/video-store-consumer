import React, { Component } from 'react';

import './NewRentalContainer.css'

class NewRentalContainer extends Component {
  render() {
    const movieTitle = this.props.selectedMovie ? this.props.selectedMovie.title : 'None';
    const customerName = this.props.selectedCustomer ? this.props.selectedCustomer.name : 'None';

    return (
      <div className='new-rental'>
        <p className='new-rental__movie-selection'>Selected Movie: {movieTitle}</p>
        <p className='new-rental__customer-selection'>Selected Customer: {customerName}</p>
        <button className='new-rental__check-out-button'>Check Out New Rental</button>
      </div>
    );
  }
}

export default NewRentalContainer;
