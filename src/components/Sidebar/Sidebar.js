import React from "react";
import { Link } from "react-router-dom";
import SidebarCard from "../../components/SidebarCard/SidebarCard";

const Sidebar = ({ resetGameData }) => {
  return (
    <>
      <Link
        onClick={() => {
          resetGameData();
        }}
        to="/"
      >
        <div>POPULAR GAMES</div>
      </Link>
      <Link
        onClick={() => {
          resetGameData();
        }}
        to="/newgames"
      >
        <div>NEW GAMES</div>
      </Link>
      <Link
        onClick={() => {
          resetGameData();
        }}
        to="/upcominggames"
      >
        <div>UPCOMING GAMES</div>
      </Link>
    </>
  );
};

export default Sidebar;
