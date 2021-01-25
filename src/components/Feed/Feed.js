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
        <Searchbar handleSubmit={handleSubmit} style={{ zIndex: 5 }} />
      </Route>
      {gameData ? (
        <Route exact path="/searchfeed">
          <Container>
            <h1>RESULTS</h1>
            <Grid>
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
            </Grid>
          </Container>
        </Route>
      ) : (
        <Route exact path="/searchfeed">
          "Loading"
        </Route>
      )}
      <Route exact path="/newgames">
        <Container>
          <h1>NEW GAMES</h1>
          <Grid>
            {newGamesData.results.map((game, i) => (
              <PreviewCard
                key={i}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                getGameId={getGameId}
              />
            ))}
          </Grid>
        </Container>
      </Route>
      <Route exact path="/">
        <Container>
          <h1>POPULAR GAMES</h1>
          <Grid>
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
          </Grid>
        </Container>
      </Route>
      <Route exact path="/upcominggames">
        <Container>
          <h1>UPCOMING GAMES</h1>
          <Grid>
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
          </Grid>
        </Container>
      </Route>
      <Route exact path="/details">
        {gameDetails && screenShots ? (
          <DetailCard
            gameDetails={gameDetails}
            key={gameDetails.id}
            name={gameDetails.name}
            rating={gameDetails.rating}
            description={gameDetails.description_raw}
            developers={gameDetails.developers}
            platforms={gameDetails.platforms}
            screenShots={screenShots}
          />
        ) : (
          "Loading...."
        )}
      </Route>
    </>
  );
};

export default Feed;

const Container = styled.div`
  padding: 0rem 5rem;
  h1 {
    padding: 4rem 5rem;
    color: #fffafa;
    font-size: 5rem;
  }
`;

const Grid = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
