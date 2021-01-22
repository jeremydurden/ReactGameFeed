import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ resetGameData }) => {
  return (
    <>
      <div className="Header">this is the Header</div>
      <Link
        onClick={() => {
          resetGameData();
        }}
        to="/"
      >
        home link
      </Link>
      <span> </span>
      <Link to="/signup">Sign Up</Link>
      <span> </span>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Header;
