import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SectionTitle from 'components/SectionTitle';
import Title from 'components/Title';
import Text from 'components/Text';
import Tooltip from 'components/Tooltip';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  changeLang as changeLangAction,
  changeTheme as changeThemeAction,
} from 'services/settings/actions';

const StyledSettingsWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;

const StyledOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledOptionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledOption = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const StyledMenuButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  outline: 0;
`;

const StyledMenu = styled(Menu)`
  & > .MuiPaper-root {
    background-color: ${({ theme }) => theme.colors.focusBackground};
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
`;

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#646ecb',
    },
  },
  overrides: {
    // Style sheet name
    MuiSvgIcon: {
      // Name of the rule
      root: {
        // Some CSS
        fontSize: '2.5rem',
      },
    },
    MuiButton: {
      root: {
        fontSize: '1.6rem',
        textTransform: 'none',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '1.6rem',
      },
    },
  },
});

// changeLang - add to props

const Settings = ({ changeTheme, isDark }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SectionTitle>Settings</SectionTitle>
      <StyledSettingsWrapper>
        <StyledOptionWrapper>
          <StyledOptionDescription>
            <Title>Theme</Title>
            <Text clasName="dsfdsfds">Change the color theme of the page.</Text>
          </StyledOptionDescription>
          <StyledOption>
            <ThemeProvider theme={customTheme}>
              <Tooltip title="Toggle light/dark theme">
                <Switch
                  checked={isDark}
                  onChange={() => changeTheme(!isDark)}
                  name="isChecked"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  color="primary"
                />
              </Tooltip>
            </ThemeProvider>
          </StyledOption>
        </StyledOptionWrapper>

        <StyledOptionWrapper>
          <StyledOptionDescription>
            <Title>Language</Title>
            <Text clasName="dsfdsfds">Set the language of the keywords entered.</Text>
          </StyledOptionDescription>

          <StyledOption>
            <ThemeProvider theme={customTheme}>
              <StyledMenuButton
                type="button"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                English
                <ExpandMoreIcon />
              </StyledMenuButton>
              <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={handleClose}>Deutsch</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>English</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Español</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Français</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Polish</StyledMenuItem>
              </StyledMenu>
            </ThemeProvider>
          </StyledOption>
        </StyledOptionWrapper>
      </StyledSettingsWrapper>
    </>
  );
};

Settings.propTypes = {
  // changeLang: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeLang: () => dispatch(changeLangAction()),
  changeTheme: (checked) => dispatch(changeThemeAction(checked)),
});

const mapStateToProps = (state) => ({
  isDark: state.settings.darkTheme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
