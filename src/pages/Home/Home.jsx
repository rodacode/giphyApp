import React from "react";
import Header from "../../components/Header/Header";
import GifsList from "../../components/GifsList/GifsList";

const Home = () => {
  return (
    <div className="home__container" data-testid="home__container">
      <Header />
      <GifsList />
    </div>
  );
};

export default Home;
