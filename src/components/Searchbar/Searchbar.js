import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Searchbar = (props) => {
  const [gameTitle, setGameTitle] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log("handleSubmit clicked");
    e.preventDefault();
    props.handleSubmit(gameTitle);
    setGameTitle("");
    history.push("/searchfeed");
  };
  const handleChange = (e) => {
    console.log("handleChange clicked");
    const title = e.target.value;
    setGameTitle(title);
  };
  return (
    <>
      <Search>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gameTitle">Title:</label>
          <input
            id="gameTitle"
            type="text"
            value={gameTitle}
            onChange={handleChange}
          />
          <input type="submit" value="Search for Games" />
        </form>
      </Search>
    </>
  );
};

export default Searchbar;

const Search = styled.div`
  margin: 4rem 0 0 0;
`;
