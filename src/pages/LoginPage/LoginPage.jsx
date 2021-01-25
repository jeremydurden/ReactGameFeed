import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useHistory, Link } from "react-router-dom";
import { Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import styled, { css } from "styled-components";

export default function LoginPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(state, "this is state");
      console.log(props, "this is props");
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignupOrLogin(); //
      history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <h1 style={{ color: "white" }}>Log-in to your account</h1>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <StyledButton
                fluid
                size="large"
                type="submit"
                className="btn"
                disabled={invalidForm}
              >
                <span>Log-in</span>
              </StyledButton>
            </Segment>
          </Form>
          <Message>
            <span style={{ color: "#0C59F6" }}>New to us?</span>{" "}
            <Link to="/signup">
              <span style={{ color: "#0cedd7" }}>Sign Up</span>
            </Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}

const StyledButton = styled.button`
  background: linear-gradient(45deg, #0cedd7, #0c54f7);
  color: white;
  font-size: 1.25em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: 2px solid white;
  border-radius: 4px;
`;
