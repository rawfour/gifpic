import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h4`
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.8rem;
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
