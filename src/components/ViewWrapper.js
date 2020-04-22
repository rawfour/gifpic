import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledViewWrapper = styled.div`
  opacity: 0;
  transition: 0.1s;
  animation: ${fadeIn} 1s 1s forwards;
  position: relative;
  min-height: 100vh;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    z-index: -1;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.backgroundTrans};
  }
`;

const ViewWrapper = ({ children }) => {
  return <StyledViewWrapper>{children}</StyledViewWrapper>;
};

ViewWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ViewWrapper;
