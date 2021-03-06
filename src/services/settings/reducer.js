import { CHANGE_LANG, CHANGE_THEME } from '../actionTypes';

const initialState = {
  lang: 'English',
  darkTheme: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        darkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
