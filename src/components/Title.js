import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h4`
  margin: 10px 0;
  font-weight: 700;
  transition: 0.2s;
  font-size: ${({ theme }) => theme.fontSizes.l};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
