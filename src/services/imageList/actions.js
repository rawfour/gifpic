import { FETCH_BEGINE, FETCH_DONE, SET_ERROR } from 'services/actionTypes';
import history from 'history.js';
import { GiphyFetch } from '@giphy/js-fetch-api';

const giphyApiKey = process.env.REACT_APP_API_KEY;
const gf = new GiphyFetch(giphyApiKey);

export const fetchImages = () => async (dispatch, getState) => {
  const { query } = getState();
  try {
    dispatch({ type: FETCH_BEGINE });
    // history.push(`${process.env.PUBLIC_URL}/`);
    const limit = 25;
    const fetchGifs = (offset) =>
      query ? gf.search({ query, offset, limit }) : gf.trending({ offset, limit });
    await setTimeout(() => {
      dispatch({
        type: FETCH_DONE,
        payload: fetchGifs,
      });
    }, 2000);
  } catch (error) {
    dispatch({ type: SET_ERROR });
    history.push(`${process.env.PUBLIC_URL}/error`);
  }
};
