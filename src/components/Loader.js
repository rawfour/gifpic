import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#646ecb',
    },
  },
});

const Loader = () => {
  return (
    <StyledLoader>
      <ThemeProvider theme={customTheme}>
        <CircularProgress color="primary" />
      </ThemeProvider>
    </StyledLoader>
  );
};

export default Loader;
