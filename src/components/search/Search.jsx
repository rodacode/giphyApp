import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_IS_TRENDING, SET_QUERY, SORT_BY_DATE } from "../../actions";
import { fetchGifs } from "../../helpers/fetchGifs";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchOptions from "../searchOptions/SearchOptions";
import "./search.scss";

const Search = ({ type, gifPerPage, rating, offset }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchGifs("search",type, gifPerPage, rating, offset, inputValue));
    dispatch({ type: SET_IS_TRENDING, payload: false });
    dispatch({ type: SORT_BY_DATE, payload: false });
    dispatch({ type: SET_QUERY, payload: inputValue });
  };

  const handleTrending = () => {
    dispatch(fetchGifs("trending",type, gifPerPage, rating, offset));
  };

  return (
    <div className="search__container" data-testid="search__container">
      <div className="search__input_row">
        <TextField
          id="outlined-basic"
          label="Search for gifs..."
          className="search__input"
          variant="outlined"
          data-testid="search__input"
          value={inputValue}
          onChange={handleOnChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          data-testid="search__button"
          className="search__button"
        >
          Search
        </Button>
      </div>

      <div className="search__options_row">
        <SearchOptions
          type={type}
          gifPerPage={gifPerPage}
          rating={rating}
          offset={offset}
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleTrending}
          data-testid="trending__button"
          className="trending__button"
        >
          Trending
        </Button>
      </div>
    </div>
  );
};

export default Search;
