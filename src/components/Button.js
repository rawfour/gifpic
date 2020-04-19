import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonUi } from '@material-ui/core';

const Button = ({ children, variant, color }) => {
  return (
    <ButtonUi variant={variant} color={color}>
      {children}
    </ButtonUi>
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
