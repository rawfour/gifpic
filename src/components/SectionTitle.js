import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 3.5rem;
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 4.5rem;
    margin-bottom: 80px;
  }
`;

const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
