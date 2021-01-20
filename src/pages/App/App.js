import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import userService from "../../utils/userService";
//pages
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
//components
function App(props) {
  const [user, setUser] = useState(userService.getUser());
  function handleSignupOrLogin() {
    console.log("hello, this is handleSignUpOrLogin");
    setUser(userService.getUser());
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
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
