import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">this is the Header</div>
      <Link to="/signup">Sign Up</Link>
      <span> </span>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Header;
