import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_TRENDING, SET_QUERY } from "../../actions";
import { fetchSearchedGifs } from "../../helpers/fetchGifs";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./search.scss";


const Search = () => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const type = useSelector((state) => state.type);
  const gifPerPage = useSelector((state) => state.gifPerPage);
  const rating = useSelector((state) => state.rating);
  const offset = useSelector((state) => state.offset);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchSearchedGifs(type, gifPerPage, rating, offset, inputValue));
    dispatch({ type: SET_IS_TRENDING, payload: false });
    dispatch({ type: SET_QUERY, payload: inputValue });
  };

  return (
    <div className="search__container" data-testid="search__container">
        <TextField
          id="outlined-basic"
          label="Search gifs of stickers..."
          className="search__input"
          variant="outlined"
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
        >
          Search
        </Button>
    </div>
  );
};

export default Search;
