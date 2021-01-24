import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Release Date: {released}</p>
      </Link>
    </Container>
  );
};

export default PreviewCard;

const Container = styled.div`
  img {
    width: 100%;
  }
`;
