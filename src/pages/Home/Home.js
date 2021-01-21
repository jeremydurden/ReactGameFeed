import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { Redirect } from "react-router-dom";

const Home = ({
  user,
  handleSubmit,
  popularData,
  gameData,
  newGamesData,
  upcomingData,
}) => {
  console.log(popularData, "this is from home");
  return (
    <>
      <div>this is the homepage</div>

      {!user ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Header />
          <Sidebar />
          <Feed
            handleSubmit={handleSubmit}
            popularData={popularData}
            gameData={gameData}
            newGamesData={newGamesData}
            upcomingData={upcomingData}
          />
        </>
      )}
    </>
  );
};

export default Home;
