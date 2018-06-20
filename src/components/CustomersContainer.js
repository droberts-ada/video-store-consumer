import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

import ItemList from './ItemList';
import Customer from './Customer';

const CUSTOMERS_URL = 'https://ada-video-store-api.herokuapp.com/customers'

class CustomersContainer extends React.Component {
  static propTypes = {
    selectCustomer: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    this.props.setStatus(
      'Loading customers...',
      'pending'
    );

    axios.get(CUSTOMERS_URL)
    .then((response) => {
      console.log(response);
      this.setState({
        customers: response.data
      });
      this.props.setStatus(
        `Loaded ${response.data.length} customers`,
        'success'
      );
    })
    .catch((error) => {
      this.props.setStatus(
        `Failed to load customers: ${error.message}`,
        'error'
      );
      console.log('failure response');
      console.log(error);
    });
  }

  selectCustomer = (customer_id) => {
    console.log('Customer selected');
    console.log(customer_id);

    const customer = this.state.customers.find((customer) => customer.id === customer_id )

    this.props.selectCustomer(customer);

  }

  render() {
    return (
      <div className="library-container">
        <ItemList
          items={this.state.customers}
          ItemComponent={Customer}
          buttonText="Select for Rental"
          buttonClickHandler={this.selectCustomer}
          />
      </div>
    );
  }
}

export default CustomersContainer;
