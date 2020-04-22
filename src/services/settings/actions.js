import { CHANGE_LANG, CHANGE_THEME } from '../actionTypes';

export const changeLang = (lang) => {
  return {
    type: CHANGE_LANG,
    payload: lang,
  };
};

export const changeTheme = (isLight) => {
  return {
    type: CHANGE_THEME,
    payload: isLight,
  };
};
