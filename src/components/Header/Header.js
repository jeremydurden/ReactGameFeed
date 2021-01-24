import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ resetGameData }) => {
  return (
    <>
      <Link
        onClick={() => {
          resetGameData();
        }}
        to="/"
      >
        HOME
      </Link>
      <span> </span>
      <Link to="/signup">SIGN UP</Link>
      <span> </span>
      <Link to="/login">LOGIN</Link>
    </>
  );
};

export default Header;
