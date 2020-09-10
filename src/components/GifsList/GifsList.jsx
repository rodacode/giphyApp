import React from "react";
import { Gif } from "@giphy/react-components";

const GifsList = ({ gifs }) => {
  const onGifClick = (gif, e) => {
    e.preventDefault();
  };

  return (
    <div className="gifsList__container" data-testid="gifsList__container">
      {gifs &&
        gifs.map((gif) => (
          <div data-testid="gif__item">
            <Gif
              key={gif.id}
              gif={gif}
              width={"100%"}
              onGifClick={onGifClick}
            />
          </div>
        ))}
    </div>
  );
};

export default GifsList;
