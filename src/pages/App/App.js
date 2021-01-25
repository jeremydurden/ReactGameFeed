import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import userService from "../../utils/userService";

//pages & components
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
import Header from "../../components/Header/Header";

//API function
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
} from "../../utils/gameService";

///////////Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";

function App(props) {
  const [user, setUser] = useState(userService.getUser());
  const [gameData, setGameData] = useState(null);
  const [popularData, setPopularData] = useState();
  const [newGamesData, setNewGamesData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [gameTitle, setGameTitle] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [screenShots, setScreenShots] = useState(null);
  function handleSignupOrLogin() {
    console.log("hello, this is handleSignUpOrLogin");
    setUser(userService.getUser());
  }

  const handleSubmit = (title) => {
    setGameTitle(title);
  };

  const resetGameData = () => {
    setGameData(null);
    setGameDetails(null);
  };

  const getGameId = (id) => {
    console.log("get game id firing, this is id: ", id);
    setGameId(id);
  };
  ////////API Call for my POPULAR games feed
  useEffect(() => {
    fetch(popularGamesURL())
      .then((res) => res.json())
      .then((popularData) => {
        setPopularData(popularData);
      });
  }, []);
  ////////API Call for my NEW games feed

  useEffect(() => {
    fetch(newGamesURL())
      .then((res) => res.json())
      .then((newGamesData) => {
        setNewGamesData(newGamesData);
      });
  }, []);
  ////////API Call for my UPCOMING games feed

  useEffect(() => {
    fetch(upcomingGamesURL())
      .then((res) => res.json())
      .then((upcomingData) => {
        setUpcomingData(upcomingData);
      });
  }, []);
  ////////API Call for my SEARCH games feed

  useEffect(() => {
    const gameUrl = `https://rawg.io/api/games?search=${gameTitle}&page_size=6`;
    fetch(gameUrl)
      .then((res) => res.json())
      .then((data) => {
        if (gameTitle == null) {
        } else {
          setGameData(data);
        }
      });
  }, [gameTitle]);

  ///////////////API Call for my games DETAIL
  useEffect(() => {
    console.log("game details fetch this is id", gameId);

    if (gameId == null) {
    } else {
      const gameDetailsURL = `https://api.rawg.io/api/games/${gameId}`;
      console.log(gameDetailsURL, "this is gameDetails url");
      fetch(gameDetailsURL)
        .then((res) => res.json())
        .then((gameDetails) => {
          console.log(gameDetails, "this is gameDetails data");
          setGameDetails(gameDetails);
        });
    }
  }, [gameId]);

  ///////////////API Call for my games DETAIL

  useEffect(() => {
    console.log("game details fetch this is id", gameId);

    if (gameId == null) {
    } else {
      const screenShotsURL = `https://api.rawg.io/api/games/${gameId}/screenshots`;
      console.log(screenShotsURL, "this is gameDetails url");
      fetch(screenShotsURL)
        .then((res) => res.json())
        .then((screenShots) => {
          console.log(screenShots, "this is screenShots data");
          setScreenShots(screenShots);
        });
    }
  }, [gameId]);

  return (
    <div className="App">
      <Switch>
        <Body>
          <Header user={user} resetGameData={resetGameData} />
          <Route exact path="/login">
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          </Route>
          <Route exact path="/signup">
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          </Route>
          <Route path="/">
            {popularData && upcomingData && newGamesData ? (
              <Home
                user={user}
                handleSubmit={handleSubmit}
                popularData={popularData}
                newGamesData={newGamesData}
                upcomingData={upcomingData}
                gameData={gameData}
                resetGameData={resetGameData}
                getGameId={getGameId}
                gameDetails={gameDetails}
                gameId={gameId}
                screenShots={screenShots}
              />
            ) : (
              <div>loading</div>
            )}
          </Route>
          <Redirect to="/" />
        </Body>
      </Switch>
    </div>
  );
}

export default App;

const Body = styled.body`
  min-height: 100vh;
  background: linear-gradient(45deg, #0cedd7, #0c54f7);
`;
