import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import userService from "../../utils/userService";
//pages
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
//components
//API function
import { popularGamesURL } from "../../utils/gameService";

///////////

function App(props) {
  const [user, setUser] = useState(userService.getUser());
  const [gameData, setGameData] = useState("");
  const [popularData, setPopularData] = useState();
  const [gameTitle, setGameTitle] = useState("");
  function handleSignupOrLogin() {
    console.log("hello, this is handleSignUpOrLogin");
    setUser(userService.getUser());
  }

  const handleSubmit = (title) => {
    console.log("App - make Api Call - title", title);
    setGameTitle(title);
    // after our api call we'll set our movieData
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
    console.log(gameTitle, " useEffect");
    const gameUrl = `https://rawg.io/api/games?search=${gameTitle}&page_size=6`;
    fetch(gameUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "this is data");
        setGameData(data);
      });
  }, [gameTitle]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {gameData.results ? (
            <Home
              user={user}
              handleSubmit={handleSubmit}
              popularData={popularData}
              gameData={gameData}
            />
          ) : (
            ""
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
