import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_TRENDING, SET_QUERY } from "../../actions";
import { fetchSearchedGifs } from "../../helpers/fetchGifs";

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
    console.log("wow");
    dispatch(fetchSearchedGifs(type, gifPerPage, rating, offset, inputValue));
    dispatch({ type: SET_IS_TRENDING, payload: false });
    dispatch({ type: SET_QUERY, payload: inputValue });
  };

  return (
    <div className="search__container" data-testid="search__container">
      <input
        value={inputValue}
        onChange={handleOnChange}
        data-testid="search__input"
      />
      <button onClick={handleSearch} data-testid="search__button">
        Search
      </button>
    </div>
  );
};

export default Search;
