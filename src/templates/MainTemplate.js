import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../theme/MainTheme';

const MainTemplate = ({ children, isDark }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object]).isRequired,
  isDark: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isDark: state.settings.darkTheme,
});

export default connect(mapStateToProps, null)(MainTemplate);
