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
        <form style={{ zIndex: 15 }} onSubmit={handleSubmit}>
          <label htmlFor="gameTitle"></label>
          <StyledSearch
            id="gameTitle"
            type="text"
            value={gameTitle}
            onChange={handleChange}
          />
          <StyledInput type="submit" value="Search for Games" />
        </form>
      </Search>
    </>
  );
};

export default Searchbar;

const Search = styled.div`
  margin: 4rem 0 0 0;
`;

const StyledInput = styled.input`
  background: #0c54f7;
  color: white;
  font-size: 0.65em;
  margin: 1em;
  padding: 1em 1em;
  border: 0.25px solid white;
  border-radius: 4px;
`;

const StyledSearch = styled.input`
  border: 0.25px solid#0c54f7;
  border-radius: 4px;
  margin: 1em;
  height: 2.25em;
  width: 15em;
  font-size: 24;
  color: #0c54f7;
`;
