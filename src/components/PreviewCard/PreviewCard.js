import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import DetailCard from "../DetailCard/DetailCard";

//import "./PreviewCard.scss";

const PreviewCard = ({ name, released, id, image, getGameId }) => {
  return (
    <div>
      <Link
        to="details/:id"
        onClick={() => {
          console.log(id, "this is the id");
          getGameId(id);
        }}
      >
        <img style={{ width: "40vh", height: "auto" }} src={image} alt={name} />
        <h3>{name}</h3>
        <p>Release Date: {released}</p>
      </Link>
    </div>
  );
};

export default PreviewCard;
