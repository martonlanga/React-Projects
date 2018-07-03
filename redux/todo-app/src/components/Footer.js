import React from 'react';
import PropTypes from 'prop-types';
import * as Filters from '../constants/TodoFilters';
import Filter from  './Filter';
import classnames from 'classnames';
import ReactSVG from 'react-svg';

const FILTER_TITLES = {
  [Filters.SHOW_ALL]: 'All',
  [Filters.SHOW_ACTIVE]: 'Active',
  [Filters.SHOW_COMPLETED]: 'Completed'
};

const Footer = ({
  activeCount,
  completedCount,
  clearCompleted,
  setVisibilityFilter,
  visibilityFilter
}) =>
  <div className='main__footer'>
    <span className='main__footer--active'>
      {activeCount} / {activeCount + completedCount}
     </span>
    <ul className='main__footer--filters'>
      {Object.keys(FILTER_TITLES).map(filter =>
        <Filter
          handleClick={() => setVisibilityFilter(filter)}
          key={filter}
        >
          {filter === visibilityFilter ?
            <s>{FILTER_TITLES[filter]}</s>
            : FILTER_TITLES[filter]}
        </Filter>
      )}
    </ul>
    <button
      className={classnames({
        'main__footer--clear': true,
        'button': true,
        'button--disabled': !completedCount
      })}
      onClick={clearCompleted}
    >
      <ReactSVG path='../assets/delete.svg' />
    </button>
  </div>;

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default Footer;
