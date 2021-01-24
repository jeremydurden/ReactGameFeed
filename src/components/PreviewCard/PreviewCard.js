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
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.25)
  );
  img {
    width: 95%;
    border-radius: 1rem;
  }
  border-radius: 1rem;
`;

const Title = styled.div`
  padding: 2rem 0rem 1rem;
  font-size: 2rem;
`;
