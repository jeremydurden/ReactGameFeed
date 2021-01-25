import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { smallImage } from "../../utils/gameService";

//import "./PreviewCard.scss";

const PreviewCard = ({ name, released, id, image, getGameId }) => {
  return (
    <Container>
      <Link
        to="details/"
        onClick={() => {
          console.log(id, "this is the id");
          getGameId(id);
        }}
      >
        <Title>{name}</Title>
        <p>Release Date: {released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </Container>
  );
};

export default PreviewCard;

const Container = styled.div`
  min-height: 20vh;

  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.15)
  );
  img {
    width: 95%;
    border-radius: 1rem;
    padding: 0rem 0rem 1.5rem 0rem;
  }
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
`;

const Title = styled.div`
  color: #0e0ce8;
  padding: 2rem 0rem 1rem;
  font-size: 2rem;
`;
