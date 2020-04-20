import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: 1.6rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
  }
`;

const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
