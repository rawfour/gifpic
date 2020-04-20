import { FETCH_BEGINE, FETCH_DONE, SET_ERROR } from 'services/actionTypes';

const initialState = {
  images: null,
  query: false,
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
    case SET_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default imagesListReducer;