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
  resetGameData,
  getGameId,
  gameDetails,
  gameId,
  screenShots,
}) => {
  return (
    <>
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Header resetGameData={resetGameData} />
          <Sidebar />
          <Feed
            handleSubmit={handleSubmit}
            popularData={popularData}
            gameData={gameData}
            newGamesData={newGamesData}
            upcomingData={upcomingData}
            getGameId={getGameId}
            gameDetails={gameDetails}
            gameId={gameId}
            screenShots={screenShots}
          />
        </>
      )}
    </>
  );
};

export default Home;
