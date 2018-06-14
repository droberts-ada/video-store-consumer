import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Search by Movie Title'
            onChange={(e) => this.setState({searchTerm: e.target.value})} />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired
}

export default SearchBar;
