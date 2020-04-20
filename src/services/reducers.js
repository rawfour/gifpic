import { combineReducers } from 'redux';
import settingsReducer from 'services/settings/reducer';
import imagesListReducer from 'services/imageList/reducer';

export default combineReducers({
  settings: settingsReducer,
  images: imagesListReducer,
});
