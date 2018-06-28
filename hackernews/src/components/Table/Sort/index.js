import React from 'react';
import Button from '../../Button/index.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sort = ({children, onSort, sortKey, activeSortKey}) => {
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  );

  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
    >
      {children}
    </Button>
  );
};

Sort.propTypes = {
  children: PropTypes.string,
  onSort: PropTypes.func,
  sortKey: PropTypes.string
};

export default Sort;
