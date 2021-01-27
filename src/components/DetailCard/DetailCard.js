import React from "react";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import styled from "styled-components";
///icon images
import playstation from "../../images/playstation.svg";
import steam from "../../images/steam.svg";
import xbox from "../../images/xbox.svg";

import nintendo from "../../images/nintendo.svg";
import apple from "../../images/apple.svg";
import gamepad from "../../images/gamepad.svg";

const DetailCard = ({
  name,
  rating,
  description,
  developers,
  platforms,
  screenShots,
  gameDetails,
}) => {
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      <FlexBox>
        <ImageContainer>
          {screenShots ? (
            <SimpleSlider
              style={{ padding: "5rem" }}
              screenShots={screenShots}
            />
          ) : (
            "Loading"
          )}
        </ImageContainer>
      </FlexBox>
      <Container>
        <FlexBox2>
          <FlexBox4>
            <H1>{name}</H1>
          </FlexBox4>
          <h5>
            ESRB rating:{"  "}
            {gameDetails.esrb_rating ? gameDetails.esrb_rating.name : "N/A"}
          </h5>
        </FlexBox2>
        <h5>Score: {rating}</h5>
        <h5>Developer:</h5>
        {developers.map((developer) => (
          <p>{developer.name}</p>
        ))}

        <h5>Description</h5>
        <FlexBox4>
          <P>{description}</P>
        </FlexBox4>
        <h2>Platforms:</h2>
        {platforms.map((platform) => (
          <>
            <StyledDiv>
              <h5>{platform.platform.name}</h5>

              <img
                title={platform.platform.name}
                alt={platform.platform.name}
                key={platform.platform.id}
                src={getPlatform(platform.platform.name)}
              ></img>
            </StyledDiv>
          </>
        ))}
      </Container>
    </>
  );
};

export default DetailCard;

const Container = styled.div`
  margin: 5rem;
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
  margin: 5rem 0rem 0.1rem 0rem;
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
const FlexBox2 = styled.div`
  flex-direction: row; ;
`;
const H1 = styled.h1`
  font-size: 3rem;

  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 22px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  width: 25%;
`;
const P = styled.div`
  font-size: 1.5em;
  color: #0c59f6;
  line-height: 1.6;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 22px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  width: 80%;
`;
const StyledDiv = styled.div`
  margin-bottom: 2rem;
`;
const FlexBox4 = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
