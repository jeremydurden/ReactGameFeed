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
    <>
      <FlexBox>
        <ImageContainer>
          <SimpleSlider style={{ padding: "5rem" }} screenShots={screenShots} />
        </ImageContainer>
      </FlexBox>
      <Container>
        <h3>{name}</h3>
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
      </Container>
    </>
  );
};

export default DetailCard;

const Container = styled.div`
  margin: -1rem 5rem;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
`;

const ImageContainer = styled.div`
  margin: 5rem;
  padding: 3rem;
  max-width: 87vh;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;
