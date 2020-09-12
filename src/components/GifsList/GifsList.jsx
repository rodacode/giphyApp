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
      {gifs.length > 0 ? (
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {gifs.map((gif) => (
            <div key={gif.id} data-testid="gif__item">
              <Gif
                gif={gif}
                width={"100%"}
                height={"auto"}
                onGifClick={onGifClick}
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <h2 className="noGifs">
          Oops we couldn't find anything with that search term
        </h2>
      )}
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
          <div className="gifModal__container">
            <Gif gif={modalGif} width={200} />
            {modalGif.title && (
              <>
                <span className="infoLabel">title</span>
                <p>{modalGif.title}</p>
              </>
            )}
            {modalGif.username && (
              <>
                <span className="infoLabel">user</span>
                <p>{modalGif.username}</p>
              </>
            )}
            {modalGif.rating && (
              <>
                <span className="infoLabel">rating</span>
                <p>{modalGif.rating}</p>
              </>
            )}
            <div className="whatsappShare">
              <a href="whatsapp://send?text=LookMum" className="whatsappLink">
                Share on whatsapp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifsList;
