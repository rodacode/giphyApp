import { loadGifsSuccess, loadGifsPending, loadGifsFailed } from "../actions";

const apiKey = "I1d4vejcCtbSj1gZKPq6gTKSbPhPE3KD";

export function fetchTrendingGifs(type, gifPerPage, rating, offset) {
  return (dispatch) => {
    dispatch(loadGifsPending());
    try {
      fetch(
        `https://api.giphy.com/v1/${type}/trending?api_key=${apiKey}&limit=${gifPerPage}&rating=${rating}&offset=${offset}`
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
export function fetchSearchedGifs(type, gifPerPage, rating, offset, query) {
  return (dispatch) => {
    dispatch(loadGifsPending());
    try {
      fetch(
        `https://api.giphy.com/v1/${type}/search?api_key=${apiKey}&limit=${gifPerPage}&rating=${rating}&offset=${offset}&q=${query}`
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
