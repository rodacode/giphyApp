import React, { useState } from "react";
import { Gif } from "@giphy/react-components";
import Masonry from "react-masonry-css";
import "./gifsList.scss";

const GifsList = ({ gifs }) => {
  const [modalGif, setModalGif] = useState();

  const onGifClick = (gif, e) => {
    e.preventDefault();
    setModalGif(gif);
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
              <Gif gif={gif} width={"100%"} onGifClick={onGifClick} />
            </div>
          ))}
      </Masonry>
      {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .9)",
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={200} />
          <div className="whatsappShare">
            <a href="whatsapp://send?text=Look Mum" className="whatsappLink">
              <i class="fa fa-whatsapp"></i>
              whatsapp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifsList;
