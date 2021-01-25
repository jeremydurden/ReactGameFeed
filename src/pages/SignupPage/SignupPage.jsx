import React, { useState, useRef, useEffect } from "react";
import "./SignupPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { useForm } from "../../hooks/useForm";
import userService from "../../utils/userService";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

export default function SignupPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
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

    // Photos have to be sent over using FormData,
    // they are sent over to the server in multiple requests
    const formData = new FormData();
    formData.append("photo", selectedFile);

    for (let fieldName in state) {
      console.log(fieldName, state[fieldName]);
      // append the rest of the data to the form obejct
      formData.append(fieldName, state[fieldName]);
    }

    try {
      console.log(formData.forEach((item) => console.log(item)));

      // use the userService to make the fetch request
      await userService.signup(formData);

      // Route to wherever you want!
      // after you get a response from the server from
      // the signup request, you need to grab the token from
      // local storage and set the user!
      props.handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message);
      setError(err.message);
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, "this is e.target.files");
    setSelectedFile(e.target.files[0]);
  }

  //key should be password
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <h1 style={{ fontSize: 36, color: "white" }}>Sign Up</h1>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
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
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.Field>
                <h3 style={{ color: "#0c54f7" }}>Upload a profile picture</h3>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileInput}
                />
              </Form.Field>
              <StyledButton
                type="submit"
                className="btn"
                disabled={invalidForm}
              >
                <span>Log-in to your account</span>
              </StyledButton>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
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
