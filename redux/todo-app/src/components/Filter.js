import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  handleClick,
  children
}) =>
  <li
    className='main__footer--filter'
    onClick={handleClick}
  >
    {children}
  </li>;

Filter.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Filter;
