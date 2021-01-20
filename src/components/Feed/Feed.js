import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
const Feed = ({ handleSubmit, popularData, gameData }) => {
  //   const popularGames = popularData.Ratings.map((item, i) => {
  //     return <li key={i}>{item.Source}</li>;
  //   });

  return (
    <>
      <div className="feed">this is the Feed</div>
      <Searchbar handleSubmit={handleSubmit} />

      <PreviewCard popularData={popularData} gameData={gameData} />
    </>
  );
};

export default Feed;
