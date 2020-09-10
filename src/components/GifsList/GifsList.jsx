import React from "react";

const GifsList = ({gifs}) => {
  return (
    <div className="gifsList__container" data-testid="gifsList__container">
      {gifs && gifs.map((gif) => (
        <div key={gif.id} data-testid="gif__item">
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GifsList;
