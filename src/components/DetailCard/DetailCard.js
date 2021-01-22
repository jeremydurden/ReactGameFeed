import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import "./PreviewCard.scss";

const DetailCard = ({ gameData, popularData, newGamesData, upcomingData }) => {
  const popular = popularData;
  const game = gameData;

  return (
    <div className="flex-box">
      {popular.results.map((title, i) => {
        return (
          <div className="col" key={i}>
            <img
              style={{ width: "40vh", height: "auto" }}
              src={title.short_screenshots[0].image}
              alt=""
            />
            <div>{title.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCard;
