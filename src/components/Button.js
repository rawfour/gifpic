import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant, color }) => {
  return (
    <button type="button" variant={variant} color={color}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export default Button;
