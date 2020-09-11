import React from "react";
import { useSelector } from "react-redux";

import Search from '../search/Search';
import SearchOptions from '../searchOptions/SearchOptions';

const Header = () => {
  const type = useSelector((state) => state.type);
  const gifPerPage = useSelector((state) => state.gifPerPage);
  const rating = useSelector((state) => state.rating);
  const offset = useSelector((state) => state.offset);

  return (
    <div className="header__container" data-testid="header__container">
      <Search type={type} gifPerPage={gifPerPage} rating={rating} offset={offset}/>
      <SearchOptions type={type} gifPerPage={gifPerPage} rating={rating} offset={offset}/>
    </div>
  );
};

export default Header;
