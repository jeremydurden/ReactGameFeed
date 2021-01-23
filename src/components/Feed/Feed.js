import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import DetailCard from "../DetailCard/DetailCard";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Route, Switch, Link, useParams } from "react-router-dom";

const Feed = ({
  handleSubmit,
  popularData,
  gameData,
  newGamesData,
  upcomingData,
  getGameId,
  gameDetails,
  gameId,
  screenShots,
}) => {
  console.log(popularData.results[0].id, "this is popular data index 0 id");
  return (
    <>
      <Route path="/">
        <Searchbar handleSubmit={handleSubmit} />
      </Route>
      {gameData ? (
        <Route exact path="/searchfeed">
          <h2>RESULTS</h2>
          {gameData.results.map((game, i) => (
            <PreviewCard
              key={i}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              getGameId={getGameId}
            />
          ))}
        </Route>
      ) : (
        ""
      )}
      <Route exact path="/">
        <h2>POPULAR GAMES</h2>
        {popularData.results.map((game, i) => (
          <PreviewCard
            key={i}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            getGameId={getGameId}
          />
        ))}
      </Route>
      <Route exact path="/">
        <h2>UPCOMING GAMES</h2>
        {upcomingData.results.map((game, i) => (
          <PreviewCard
            key={i}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            getGameId={getGameId}
          />
        ))}
      </Route>
      {gameDetails ? (
        <DetailCard
          key={gameDetails.id}
          name={gameDetails.name}
          rating={gameDetails.rating}
          description={gameDetails.description_raw}
          esrb={gameDetails.esrb_rating.name}
          developers={gameDetails.developers}
          platforms={gameDetails.platforms}
          screenShots={screenShots}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Feed;
