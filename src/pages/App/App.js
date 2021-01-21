import React, { useState, useEffect, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import userService from "../../utils/userService";
//pages
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
//components
//API function
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
} from "../../utils/gameService";

///////////

function App(props) {
  const [user, setUser] = useState(userService.getUser());
  const [gameData, setGameData] = useState(null);
  const [popularData, setPopularData] = useState();
  const [newGamesData, setNewGamesData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [gameTitle, setGameTitle] = useState(null);
  function handleSignupOrLogin() {
    console.log("hello, this is handleSignUpOrLogin");
    setUser(userService.getUser());
  }

  const handleSubmit = (title) => {
    console.log("handlesubmit", title);
    setGameTitle(title);
  };
  useEffect(() => {
    console.log("popgames fetch");
    console.log(popularGamesURL());
    fetch(popularGamesURL())
      .then((res) => res.json())
      .then((popularData) => {
        console.log(popularData, "this is popular data");
        setPopularData(popularData);
      });
  }, []);

  useEffect(() => {
    console.log("newgames fetch");
    console.log(newGamesURL());
    fetch(newGamesURL())
      .then((res) => res.json())
      .then((newGamesData) => {
        console.log(newGamesData, "this is newGamesData");
        setNewGamesData(newGamesData);
      });
  }, []);

  useEffect(() => {
    console.log("upcomging games fetch");
    console.log(upcomingGamesURL());
    fetch(upcomingGamesURL())
      .then((res) => res.json())
      .then((upcomingData) => {
        console.log(upcomingData, "this is popular data");
        setUpcomingData(upcomingData);
      });
  }, []);

  useEffect(() => {
    console.log(gameTitle, " useEffect - why?");
    const gameUrl = `https://rawg.io/api/games?search=${gameTitle}&page_size=6`;
    fetch(gameUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "this is data");
        if (gameTitle == null) {
        } else {
          setGameData(data);
        }
      });
  }, [gameTitle]);

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {popularData && upcomingData && newGamesData ? (
            <Home
              user={user}
              handleSubmit={handleSubmit}
              popularData={popularData}
              newGamesData={newGamesData}
              upcomingData={upcomingData}
              gameData={gameData}
            />
          ) : (
            <div>hello</div>
          )}
        </Route>
        <Route exact path="/login">
          <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
