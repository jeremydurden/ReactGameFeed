import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";

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
          <Body>
            <Header resetGameData={resetGameData} />
            <Sidebar resetGameData={resetGameData} />
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
          </Body>
        </>
      )}
    </>
  );
};

const Body = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #0cedd7, #0c54f7);
`;

const Glass = styled.div`
  background: white;
  min-height: 10vh;
`;
const Circle1 = styled.div`
  background: white;
`;
const Circle2 = styled.div`
  background: white;
`;
export default Home;
