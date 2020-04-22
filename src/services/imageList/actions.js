import {
  FETCH_BEGINE,
  FETCH_DONE,
  SET_ERROR,
  SET_QUERY,
  SET_LIMIT,
  SET_LANG,
} from 'services/actionTypes';
import history from 'history.js';
import { GiphyFetch } from '@giphy/js-fetch-api';

const giphyApiKey = process.env.REACT_APP_API_KEY;
const gf = new GiphyFetch(giphyApiKey);

export const fetchImages = () => async (dispatch, getState) => {
  const { query, limit, lang } = getState().images;
  try {
    dispatch({ type: FETCH_BEGINE });
    if (history.location.pathname !== '/images') {
      history.push(`${process.env.PUBLIC_URL}/images`);
    }
    let fetchGifs = (offset) =>
      query
        ? gf.search(query, { offset, limit: parseInt(limit, 10), lang })
        : gf.trending({ offset, limit: parseInt(limit, 10) });

    const { data: gifs } = await fetchGifs();

    if (!gifs.length) {
      fetchGifs = false;
    }

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

export const setQuery = (inputValue) => ({
  type: SET_QUERY,
  payload: inputValue,
});

export const setLimit = (limit) => {
  console.log(limit);
  return {
    type: SET_LIMIT,
    payload: limit,
  };
};

export const setLang = (lang) => ({
  type: SET_LANG,
  payload: lang,
});
