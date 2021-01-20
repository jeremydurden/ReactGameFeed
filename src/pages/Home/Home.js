import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ user, handleSubmit, popularData, gameData }) => {
  console.log(popularData, "this is from home");
  return (
    <>
      <Header />
      <Sidebar />
      <Feed
        handleSubmit={handleSubmit}
        popularData={popularData}
        gameData={gameData}
      />
    </>
  );
};

export default Home;
