import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SectionTitle from '../components/SectionTitle';
import Title from '../components/Title';
import Text from '../components/Text';
import Tooltip from '../components/Tooltip';
import ViewWrapper from '../components/ViewWrapper';
import Select from '../components/Select';
import {
  changeLang as changeLangAction,
  changeTheme as changeThemeAction,
} from '../services/settings/actions';
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
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#646ecb',
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
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

const Settings = ({ changeTheme, changeLang, currentLang, isDark, t }) => {
  const handleSetLang = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    changeLang(value);
  };

  const langList = {
    options: ['English', 'Deutsch', 'Polish'],
  };

  return (
    <ViewWrapper>
      <SectionTitle>{t('Settings')}</SectionTitle>
      <StyledSettingsWrapper>
        <StyledOptionWrapper>
          <StyledOptionDescription>
            <Title>{t('Theme')}</Title>
            <Text clasName="dsfdsfds">{t('Theme_desc')}</Text>
          </StyledOptionDescription>
          <StyledOption>
            <ThemeProvider theme={customTheme}>
              <Tooltip title={t('Theme_tooltip')}>
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
            <Select data={langList} value={currentLang} action={handleSetLang} />
          </StyledOption>
        </StyledOptionWrapper>
      </StyledSettingsWrapper>
    </ViewWrapper>
  );
};

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
  currentLang: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLangAction(lang)),
  changeTheme: (checked) => dispatch(changeThemeAction(checked)),
});

const mapStateToProps = (state) => ({
  isDark: state.settings.darkTheme,
  currentLang: state.settings.lang,
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Settings));
