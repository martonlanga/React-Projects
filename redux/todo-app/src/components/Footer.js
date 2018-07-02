import React from 'react';
import PropTypes from 'prop-types';
import * as Filters from '../constants/TodoFilters';
import Filter from  './Filter';

const FILTER_TITLES = {
  [Filters.SHOW_ALL]: 'All',
  [Filters.SHOW_ACTIVE]: 'Active',
  [Filters.SHOW_COMPLETED]: 'Completed'
};

const Footer = ({
  activeCount,
  completedCount,
  clearCompleted,
  setVisibilityFilter
}) =>
  <div className='footer'>
    <span className='footer__todos-count'>{activeCount}</span>
    <ul className='footer__filters'>
      {Object.keys(FILTER_TITLES).map(filter =>
        <Filter
          handleClick={() => setVisibilityFilter(filter)}
          key={filter}
        >
          {FILTER_TITLES[filter]}
        </Filter>
      )}
    </ul>
    {
      !!completedCount &&
        <button
          className='footer__clear-completed'
          onClick={clearCompleted}
        >
          Clear completed
        </button>
    }
  </div>;

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default Footer;
