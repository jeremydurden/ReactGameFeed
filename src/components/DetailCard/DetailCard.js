import React from "react";
import { Redirect } from "react-router-dom";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import styled, { css } from "styled-components";

const DetailCard = ({
  name,
  rating,
  description,
  developers,
  platforms,
  screenShots,
  gameDetails,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <SimpleSlider screenShots={screenShots} />
      <h5>
        ESRB rating:{"  "}
        {gameDetails.esrb_rating ? gameDetails.esrb_rating.name : "N/A"}
      </h5>
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
