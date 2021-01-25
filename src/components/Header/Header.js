import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import userService from "../../utils/userService";

const Header = ({ resetGameData, user }) => {
  let token = localStorage.getItem("token");

  function handleLogOut() {
    userService.logout();
  }
  return (
    <>
      <Style>
        <GroupOne>
          <Link
            onClick={() => {
              resetGameData();
            }}
            to="/"
          >
            <SpanStyle>HOME</SpanStyle>
          </Link>
        </GroupOne>
        <GroupTwo>
          <Link
            onClick={() => {
              resetGameData();
            }}
            to="/"
          >
            <SpanStyle>POPULAR GAMES</SpanStyle>
          </Link>
          <Link
            onClick={() => {
              resetGameData();
            }}
            to="/newgames"
          >
            <NewGameSpan>NEW GAMES</NewGameSpan>
          </Link>

          <Link
            onClick={() => {
              resetGameData();
            }}
            to="/upcominggames"
          >
            <SpanStyle>UPCOMING GAMES</SpanStyle>
          </Link>
        </GroupTwo>
        <GroupThree>
          {!token ? (
            <>
              <div>
                <Link to="/signup">
                  <SpanStyle>SIGN UP</SpanStyle>
                </Link>
              </div>
              <div>
                <Link to="/login">
                  <LoginSpan>LOGIN</LoginSpan>
                </Link>
              </div>
            </>
          ) : (
            <div>
              <a
                onClick={() => {
                  handleLogOut();
                }}
                href="/"
              >
                <LoginSpan>LOGOUT</LoginSpan>
                <Avatar src={user.photoUrl} alt={user.name} />
              </a>
            </div>
          )}
        </GroupThree>
      </Style>
    </>
  );
};

export default Header;

const Style = styled.div`
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.3)
  );

  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const GroupOne = styled.div`
  margin: 0.5rem 0rem 0.5rem 5rem;
`;
const GroupTwo = styled.div`
  display: flex;
  margin: 0.5rem;
`;
const GroupThree = styled.div`
  margin: 0.5rem 5rem 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
`;

const LoginSpan = styled.span`
  margin-left: 2rem;
  font-size: 1.25rem;
  color: #0c59f6;
`;

const NewGameSpan = styled.span`
  margin: 0 2rem 0 2rem;
  font-size: 1.25rem;
  color: #0c59f6;
`;
const SpanStyle = styled.span`
  font-size: 1.25rem;
  color: #0c59f6;
`;
const Avatar = styled.img`
  margin-left: 1rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
