import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ user }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Feed />
    </>
  );
};

export default Home;
