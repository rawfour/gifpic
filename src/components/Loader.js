import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <CircularProgress color="primary" />
    </StyledLoader>
  );
};

export default Loader;
