import {
  FETCH_BEGINE,
  FETCH_DONE,
  SET_ERROR,
  SET_QUERY,
  SET_LIMIT,
  SET_LANG,
} from 'services/actionTypes';

const initialState = {
  images: null,
  query: '',
  limit: '25',
  lang: 'en',
  loading: true,
  error: false,
};

const imagesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEGINE:
      return { ...state, loading: true, images: null };
    case FETCH_DONE:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default imagesListReducer;
