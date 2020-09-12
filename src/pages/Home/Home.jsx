import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header/Header";
import GifsList from "../../components/gifsList/GifsList";
import { fetchGifs } from "../../helpers/fetchGifs";

const Home = () => {
    const items = useSelector((state) => state.items);
    const type = useSelector((state) => state.type);
    const gifPerPage = useSelector((state) => state.gifPerPage);
    const rating = useSelector((state) => state.rating);
    const offset = useSelector((state) => state.offset);
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchGifs("trending", type, gifPerPage, rating, offset));
      }, []);

  return (
    <div className="home__container" data-testid="home__container">
      <Header />
      <GifsList gifs={items} type={type} gifPerPage={gifPerPage} rating={rating} offset={offset}/>
    </div>
  );
};

export default Home;
