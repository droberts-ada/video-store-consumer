import axios from 'axios';
import React from 'react';

import ItemList from './ItemList';
import Customer from './Customer';

const CUSTOMERS_URL = 'http://localhost:3000/customers'

class CustomersContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    axios.get(CUSTOMERS_URL)
    .then((response) => {
      console.log(response);
      this.setState({
        customers: response.data
      })
    })
    .catch((error) => {
      console.log('failure response');
      console.log(error);
    });
  }

  selectCustomer = (customer_id) => {
    console.log('Customer selected');
    console.log(customer_id);

    const customer = this.state.customers.find((customer) => customer.id == customer_id )

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
