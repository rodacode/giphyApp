export const LOAD_GIFS_PENDING = "LOAD_GIFS_PENDING";
export const LOAD_GIFS_SUCCESS = "LOAD_GIFS_SUCCESS";
export const LOAD_GIFS_FAILED = "LOAD_GIFS_FAILED";
export const SET_IS_TRENDING = 'SET_IS_TRENDING';
export const SET_QUERY = 'SET_QUERY';

export const loadGifsPending = () => ({
  type: LOAD_GIFS_PENDING,
});

export const loadGifsSuccess = (gifs) => ({
  type: LOAD_GIFS_SUCCESS,
  payload: gifs,
});

export const loadGifsFailed = (error) => ({
  type: LOAD_GIFS_FAILED,
  payload: error,
});

export const setIsTrending = (isTrending) => ({
  type: SET_IS_TRENDING,
  payload: isTrending,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});