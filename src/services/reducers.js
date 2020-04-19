import { combineReducers } from 'redux';
import settingsReducer from 'services/settings/reducer';

export default combineReducers({
  settings: settingsReducer,
});
