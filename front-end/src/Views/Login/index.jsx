import { gql, useMutation } from "@apollo/client";
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const LOGIN_USER = gql`
  mutation LoginUser($input: UserInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        firstName
        lastName
        country {
          name
          abbreviation
        }
      }
    }
  }
`;

export default function Login() {
  const {
    auth: { isAuthenticated },
    setAuthData,
  } = useContext(authContext);
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { input: { email, password } } })
      .then(({ data }) => setAuthData(data.login))
      .catch((err) => console.log(err.message));
  };
  if (isAuthenticated) return <Redirect to={"/"} />;
  return (
    <div className={"auth-wrapper"}>
      <form className={"form"}>
        <Input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <Link to={"/register"}>Not registered yet? Click here</Link>
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
}
