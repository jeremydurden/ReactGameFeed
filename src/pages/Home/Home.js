import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { Redirect } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

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
          <Spin1>
            <CircleWhite></CircleWhite>
          </Spin1>
          <Spin2>
            <CircleColor></CircleColor>
          </Spin2>
          <Spin3>
            <CircleWhite></CircleWhite>
          </Spin3>
          <Spin4>
            <CircleColor></CircleColor>
          </Spin4>
          <Spin5>
            <CircleWhite></CircleWhite>
          </Spin5>
          <Spin6>
            <CircleColor></CircleColor>
          </Spin6>
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

const CircleWhite = styled.div`
  z-index: 0;
  border-radius: 50%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)
  );
  height: 40rem;
  width: 40rem;
`;
const CircleColor = styled.div`
  z-index: 0;
  border-radius: 50%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(10, 16, 248, 0.8),
    rgba(10, 248, 229, 0.1)
  );
  height: 10rem;
  width: 10rem;
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spin1 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 65%;
  left: 5%;
`;

const Spin2 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 65%;
  left: 5%;
`;
const Spin3 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 5%;
  right: 5%;
`;
const Spin4 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 5%;
  right: 25%;
`;
const Spin5 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 90%;
  right: 5%;
`;

const Spin6 = styled.div`
  z-index: 0;
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  bottom: 2%;
  right: 7%;
`;

export default Home;
