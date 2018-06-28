import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  className,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type='button'
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
