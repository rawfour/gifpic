import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
  margin-bottom: 50px;
  font-weight: 700;
  transition: 0.2s;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;

const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
