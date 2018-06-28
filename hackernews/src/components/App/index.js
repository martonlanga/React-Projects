import React, { Component } from 'react';
import Search from '../Search/index.js';
import Table from '../Table/index.js';
import Button from '../Button/index.js';
import Loading from '../Loading/index.js';
import axios from 'axios';
import './index.css';
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../../constants/index.js';

const withLoading = (Component) => ({isLoading, ...rest}) =>
  isLoading ? <Loading /> : <Component {...rest} />;

const ButtonWithLoading = withLoading(Button);

class App extends Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
      sortKey: 'NONE',
      isSortReverse: false
    };

  }

  onSort = (sortKey) => {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({sortKey, isSortReverse});
  };

  onDismiss = (id) => {
    const {searchKey, results} = this.state;
    const {hits, page} = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      }
    });
  };

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  setSearchTopStories = (result) => {
    const {hits, page} = result;
    const {searchKey, results} = this.state;

    const oldHits = results && results[searchKey] ?
      results[searchKey].hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      },
      isLoading: false
    });
  };

  fetchStories = (searchTerm, page = 0) => {
    this.setState({isLoading: true});

    axios(
      `${PATH_BASE}${PATH_SEARCH}?` +
      `${PARAM_SEARCH}${searchTerm}&` +
      `${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({error}));
  };

  onSearchSubmit = (event) => {
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchStories(searchTerm);
    }
    event.preventDefault();
  };

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  };

  componentDidMount() {
    this._isMounted = true;

    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    this.fetchStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error,
      isLoading,
      sortKey,
      isSortReverse
    } = this.state;

    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    return (
      <div className='page'>
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {error ?
          <div className='interactions'>
            <p>Something went wrong.</p>
          </div> :
          <Table
            list={list}
            onDismiss={this.onDismiss}
            sortKey={sortKey}
            onSort={this.onSort}
            isSortReverse={isSortReverse}
          />
        }
        <div className='interactions'>
          <ButtonWithLoading
            onClick={() => this.fetchStories(searchKey, page + 1)}
            isLoading={isLoading}
          >
            More
          </ButtonWithLoading>
        </div>

      </div>
    );
  }
};

export default App;
