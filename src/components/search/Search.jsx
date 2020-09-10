import React, { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <div className="search__container" data-testid="search__container">
      <input value={inputValue} data-testid="search__input" />
      <button onClick={()=>{}} data-testid="search__button">Search</button>
    </div>
  );
};

export default Search;
