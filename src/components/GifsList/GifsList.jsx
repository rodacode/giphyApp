import React from "react";
import { Gif } from "@giphy/react-components";
import Masonry from "react-masonry-css";
import "./gifsList.scss";

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
            <div key={gif.id} data-testid="gif__item">
              <Gif
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
