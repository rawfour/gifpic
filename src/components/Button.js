import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.fontSizes.s};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Button;
