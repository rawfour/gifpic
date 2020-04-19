import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import { StylesProvider } from '@material-ui/core/styles';

const MainTemplate = ({ children }) => {
  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StylesProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object]).isRequired,
};

export default MainTemplate;
