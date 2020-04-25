import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledText = styled.span`
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.m};
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.text};
  transition: .2s;
  ${({ noResults }) =>
    noResults &&
    css`
      display: block;
      text-align: center;
      opacity: 0;
      animation: ${({ theme }) => theme.animations.fadeIn} 1s 1s forwards;
    `}
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Text = ({ children, color, size, noResults }) => {
  return (
    <StyledText color={color} size={size} noResults={noResults}>
      {children}
    </StyledText>
  );
};
Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  noResults: PropTypes.bool,
};

Text.defaultProps = {
  color: null,
  size: null,
  noResults: false,
};

export default Text;
