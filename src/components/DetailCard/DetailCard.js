import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import "./PreviewCard.scss";

const DetailCard = ({
  name,
  rating,
  description,
  esrb,
  developers,
  platforms,
  screenShot,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>ESRB rating: {esrb}</h5>
      <h5>Score: {rating}</h5>
      <h5>Developer:</h5>
      {developers.map((developer) => (
        <h5>{developer.name}</h5>
      ))}
      <p>Platforms:</p>
      {platforms.map((platform) => (
        <span key={platform.platform.id}>{platform.platform.name}// </span>
      ))}
      <h5>Description</h5>
      <p>{description}</p>
    </div>
  );
};

export default DetailCard;
