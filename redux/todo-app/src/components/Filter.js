import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  handleClick,
  children
}) =>
  <li
    className='footer__filter'
    onClick={handleClick}
  >
    {children}
  </li>;

Filter.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Filter;
