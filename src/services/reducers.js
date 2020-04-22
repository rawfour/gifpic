import { combineReducers } from 'redux';
import settingsReducer from './settings/reducer';
import imagesListReducer from './imageList/reducer';

export default combineReducers({
  settings: settingsReducer,
  images: imagesListReducer,
});
