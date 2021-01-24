import React from "react";
import Header from "../../components/Header/Header";
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
          <Body>
            <Header resetGameData={resetGameData} />
            <Sidebar resetGameData={resetGameData} />
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
const CircleWhite = styled.div`
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
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 65%;
  left: 5%;
`;

const Spin2 = styled.div`
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 65%;
  left: 5%;
`;
const Spin3 = styled.div`
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 5%;
  right: 5%;
`;
const Spin4 = styled.div`
  display: inline-block;
  animation: ${Spin} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: absolute;
  top: 5%;
  right: 25%;
`;
export default Home;
