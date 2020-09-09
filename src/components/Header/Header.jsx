import React, { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <div className="header__container" data-testid="header__container">
      <input value={inputValue} />
      <button onClick={()=>{}}>Search</button>
    </div>
  );
};

export default Header;
