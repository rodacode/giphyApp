import React from "react";
import { Gif } from "@giphy/react-components";
import Masonry from "react-masonry-css";

const GifsList = ({ gifs }) => {
  const onGifClick = (gif, e) => {
    e.preventDefault();
  };

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gifsList__container" data-testid="gifsList__container">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
      </Masonry>
    </div>
  );
};

export default GifsList;
