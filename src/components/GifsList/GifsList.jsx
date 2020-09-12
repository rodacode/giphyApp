import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gif } from "@giphy/react-components";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";
import "./gifsList.scss";
import { fetchMoreGifs } from "../../helpers/fetchGifs";

const GifsList = ({ gifs, type, gifPerPage, rating, offset }) => {
  const [modalGif, setModalGif] = useState();
  const isLoading = useSelector((state) => state.isLoading);
  const isTrending = useSelector((state) => state.isTrending);

  const dispatch = useDispatch();

  const onGifClick = (gif, e) => {
    e.preventDefault();
    setModalGif(gif);
  };

  const handleLoadMore = () => {
    console.log("MORE!!")
    isTrending
      ? dispatch(fetchMoreGifs("trending", type, gifPerPage, rating, offset))
      : dispatch(fetchMoreGifs("search", type, gifPerPage, rating, offset));
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
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={true}
          useWindow={true}
          initialLoad={false}
          loader={
            <div key="loading">
              <p>... loading</p>
            </div>
          }
        >
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
        </InfiniteScroll>
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
