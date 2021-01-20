import React from "react";
import DetailCard from "../DetailCard/DetailCard";

const PreviewCard = ({ gameData, popularData }) => {
  const popular = popularData;
  const game = gameData;
  const gameImages = game.results[0].short_screenshots.map((img, i) => {
    return <img key={i} src={img.image} alt="" />;
  });

  return (
    <div>
      {game.results.map((title, i) => {
        return (
          <div>
            <div>{title.name}</div>
            {game.results[i].short_screenshots.map((img, j) => {
              return <img key={j} src={img.image} alt="" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PreviewCard;
