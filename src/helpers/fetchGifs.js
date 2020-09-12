import {
  loadGifsSuccess,
  loadGifsPending,
  loadGifsFailed,
  loadMoreGifsSuccess,
  loadMoreGifsPending,
  loadMoreGifsFailed,
} from "../actions";

const apiKey = "I1d4vejcCtbSj1gZKPq6gTKSbPhPE3KD";

export function fetchGifs(mode, type, gifPerPage, rating, offset, query) {
  return (dispatch) => {
    dispatch(loadGifsPending());
    try {
      fetch(
        `https://api.giphy.com/v1/${type}/${mode}?api_key=${apiKey}&limit=${gifPerPage}&rating=${rating}&offset=${offset}&q=${query}`
      ).then((res) => {
        if (res.status === 200) {
          res.json().then((res) => {
            dispatch(loadGifsSuccess(res.data));
          });
        } else {
          dispatch(loadGifsFailed(res.status));
        }
      });
    } catch (err) {
      dispatch(loadGifsFailed(err));
    }
  };
}

export function fetchMoreGifs(mode, type, gifPerPage, rating, offset, query) {
  return (dispatch) => {
    dispatch(loadMoreGifsPending());
    try {
      fetch(
        `https://api.giphy.com/v1/${type}/${mode}?api_key=${apiKey}&limit=${gifPerPage}&rating=${rating}&offset=${offset}&q=${query}`
      ).then((res) => {
        if (res.status === 200) {
          res.json().then((res) => {
            dispatch(loadMoreGifsSuccess(res.data));
          });
        } else {
          dispatch(loadMoreGifsFailed(res.status));
        }
      });
    } catch (err) {
      dispatch(loadMoreGifsFailed(err));
    }
  };
}
