import React from "react";

//import "./PreviewCard.scss";

const PreviewCard = ({ gameData, popularData, newGamesData, upcomingData }) => {
  const popular = popularData.results;
  const newGame = newGamesData.results;
  const upcoming = upcomingData.results;

  return (
    <>
      {gameData ? (
        <div className="flex-box">
          <h1>RESULTS</h1>
          {gameData.results.map((title, i) => {
            return (
              <div className="col" key={i}>
                <img
                  style={{ width: "40vh", height: "auto" }}
                  src={title.short_screenshots[0].image}
                  alt=""
                />
                <div>{title.name}</div>
                <div>{title.rating}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="flex-box">
            <h1>POPULAR GAMES</h1>
            {popular.map((title, i) => {
              return (
                <div className="col" key={i}>
                  <img
                    style={{ width: "40vh", height: "auto" }}
                    src={title.short_screenshots[0].image}
                    alt=""
                  />
                  <div>{title.name}</div>
                  <div>{title.rating}</div>
                </div>
              );
            })}
          </div>
          <div className="flex-box">
            <h1>NEW GAMES</h1>
            {newGame.map((title, i) => {
              return (
                <div className="col" key={i}>
                  <img
                    style={{ width: "40vh", height: "auto" }}
                    src={title.short_screenshots[0].image}
                    alt=""
                  />
                  <div>{title.name}</div>
                  <div>{title.rating}</div>
                </div>
              );
            })}
          </div>
          <div className="flex-box">
            <h1>UPCOMING GAMES</h1>
            {upcoming.map((title, i) => {
              return (
                <div className="col" key={i}>
                  <img
                    style={{ width: "40vh", height: "auto" }}
                    src={title.short_screenshots[0].image}
                    alt=""
                  />
                  <div>{title.name}</div>
                  <div>{title.rating}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default PreviewCard;
