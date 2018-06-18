import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

import SearchBar from './SearchBar';
import ItemList from './ItemList';
import Movie from './Movie';

const SEARCH_URL = 'http://localhost:3000/movies?query=';
const ADD_URL = 'http://localhost:3000/movies';

class SearchContainer extends React.Component {
  static propTypes = {
    setStatus: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  searchMovieByTitle = (title) => {
    this.props.setStatus(`Searching for "${title}"...`, 'pending');
    console.log(`searching for ${title}`);

    axios.get(SEARCH_URL + title)
      .then((response) => {
        this.props.setStatus(`Found ${response.data.length} results for ${title}`, 'success');
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        this.props.setStatus(`Could not search for "${title}": ${error.message}`, 'error');
        console.log('failure response');
        console.log(error);
      });
  }

  addMovieToLibrary = (external_id) => {
    const movie = this.state.movies.find(movie => movie.external_id === external_id);

    this.props.setStatus(`Adding movie "${movie.title}" to library...`, 'pending');

    const url = ADD_URL + '?external_id=' + external_id;
    axios.post(url)
      .then(() => {
        this.props.setStatus(
          `Successfully added "${movie.title}" to library`, 'success');
      })
      .catch((error) => {
        this.props.setStatus(
          `Could not add "${movie.title}" to library: ${error.message}`, 'error');
        console.log('failure response');
        console.log(error);
      });
  }

  render() {
    return (
      <div className="item-list">
        <SearchBar searchCallback={this.searchMovieByTitle} />
        <ItemList
          items={this.state.movies}
          ItemComponent={Movie}
          buttonText="Add to library"
          buttonClickHandler={this.addMovieToLibrary}
          />
      </div>
    );
  }
}

export default SearchContainer;
