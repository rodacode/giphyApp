export const LOAD_GIFS_PENDING = "LOAD_GIFS_PENDING";
export const LOAD_GIFS_SUCCESS = "LOAD_GIFS_SUCCESS";
export const LOAD_GIFS_FAILED = "LOAD_GIFS_FAILED";

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
