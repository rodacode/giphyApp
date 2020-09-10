import React from "react";
import Search from '../search/Search';

const Header = () => {

  return (
    <div className="header__container" data-testid="header__container">
      <Search />
    </div>
  );
};

export default Header;
