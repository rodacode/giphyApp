import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_TRENDING, SET_TYPE, SORT_BY_DATE } from "../../actions";
import { fetchTrendingGifs, fetchSearchedGifs } from "../../helpers/fetchGifs";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./searchOptions.scss";

const SearchOptions = ({ type,gifPerPage, rating, offset }) => {
  const isTrending = useSelector((state) => state.isTrending);
  const sortByDate = useSelector((state) => state.sortByDate);
  const query = useSelector((state) => state.query);

  const dispatch = useDispatch();

  const setValue = (selector, value) => {
    switch (selector) {
      case "isTrending":
        if (!isTrending) {
          dispatch(fetchTrendingGifs(type, gifPerPage, rating, offset));
        }
        dispatch({ type: SET_IS_TRENDING, payload: value });
      case "type":
          dispatch({ type: SET_TYPE, payload: value });
        break;
      case "sortByDate":
        return dispatch({ type: SORT_BY_DATE, payload: value });
      default:
        return null;
    }
  };
  return (
      <div className="searchOptions__container">
      <FormControlLabel
        control={
          <Switch
            checked={isTrending}
            onChange={() => setValue("isTrending", !isTrending)}
            color="primary"
            name="trending"
          />
        }
        label="Trending"
      />
      <FormControlLabel
        control={
          <Switch
            checked={type === "gifs"}
            onChange={() => {
              type === "gifs"
                ? setValue("type", "stickers")
                : setValue("type", "gifs");
            }}
            color="primary"
            name="gifs"
          />
        }
        label="gifs"
      />
      <FormControlLabel
        control={
          <Switch
            checked={type === "stickers"}
            onChange={() => {
              type === "gifs"
                ? setValue("type", "stickers")
                : setValue("type", "gifs");
            }}
            color="primary"
            name="stickers"
          />
        }
        label="stickers"
      />
      <FormControlLabel
        control={
          <Switch
            checked={sortByDate}
            onChange={() => setValue("sortByDate", !sortByDate)}
            color="primary"
            name="sortByDate"
          />
        }
        label="Sort by date"
      />
      </div>
  );
};

export default SearchOptions;
