import React from 'react';
import PropTypes from 'prop-types';
import * as Filters from '../constants/TodoFilters';

const FILTER_TITLES = {
  [Filters.SHOW_ALL]: 'ALl',
  [Filters.SHOW_ACTIVE]: 'Active',
  [Filters.SHOW_COMPLETED]: 'Completed'
};

const Footer = ({
  activeCount,
  completedCount,
  clearCompleted
}) =>
  <div className='footer'>
    <span className='footer__todos-count'>{activeCount}</span>
    {/* <div className='footer__visibility'>
      <button className='footer__visibility--filter'>All</button>
      <button className='footer__visibility--filter'>Active</button>
      <button className='footer__visibility--filter'>Completed</button>
    </div> */}
    {
      !!completedCount &&
        <button className='footer__clear-completed'>Clear completed</button>
    }
  </div>;

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default Footer;
