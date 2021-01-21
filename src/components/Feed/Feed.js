import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import DetailCard from "../DetailCard/DetailCard";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Route, Switch, Link } from "react-router-dom";
const Feed = ({
  handleSubmit,
  popularData,
  gameData,
  newGamesData,
  upcomingData,
}) => {
  return (
    <>
      <Route path="/">
        <Searchbar handleSubmit={handleSubmit} />
      </Route>
      <Route exact path="/">
        <PreviewCard
          popularData={popularData}
          gameData={gameData}
          newGamesData={newGamesData}
          upcomingData={upcomingData}
        />
      </Route>
      <Route exact path="/searchfeed">
        <PreviewCard
          popularData={popularData}
          gameData={gameData}
          newGamesData={newGamesData}
          upcomingData={upcomingData}
        />
      </Route>
      <Route exact path="/details">
        <DetailCard
          popularData={popularData}
          gameData={gameData}
          newGamesData={newGamesData}
          upcomingData={upcomingData}
        />
      </Route>
    </>
  );
};

export default Feed;
