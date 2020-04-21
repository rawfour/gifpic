import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
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
import i18n from '../i18n';

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

const Settings = ({ changeTheme, isDark, t }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLang, setCurrentLang] = useState('English');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang_full, lang_short) => {
    setCurrentLang(lang_full);
    i18n.changeLanguage(lang_short);
    setAnchorEl(null);
  };

  return (
    <>
      <SectionTitle>{t('Settings')}</SectionTitle>
      <StyledSettingsWrapper>
        <StyledOptionWrapper>
          <StyledOptionDescription>
            <Title>{t('Theme')}</Title>
            <Text clasName="dsfdsfds">{t('Theme_desc')}</Text>
          </StyledOptionDescription>
          <StyledOption>
            <ThemeProvider theme={customTheme}>
              <Tooltip title={t('Theme_toggle')}>
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
            <Title>{t('Lang')}</Title>
            <Text clasName="dsfdsfds">{t('Lang_desc')}</Text>
          </StyledOptionDescription>

          <StyledOption>
            <ThemeProvider theme={customTheme}>
              <StyledMenuButton
                type="button"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {t(currentLang)}
                <ExpandMoreIcon />
              </StyledMenuButton>
              <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <StyledMenuItem onClick={() => handleClose('Deutsch', 'de')}>
                  {t('Deutsch')}
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleClose('English', 'en')}>
                  {t('English')}
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleClose('Polish', 'pl')}>
                  {t('Polish')}
                </StyledMenuItem>
              </StyledMenu>
            </ThemeProvider>
          </StyledOption>
        </StyledOptionWrapper>
      </StyledSettingsWrapper>
    </>
  );
};

Settings.propTypes = {
  t: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Settings));
