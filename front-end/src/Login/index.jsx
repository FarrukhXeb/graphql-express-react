import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const LOGIN_USER = gql`
  mutation LoginUser($input: UserInput!) {
    login(input: $input) {
      token
      user {
        email
      }
    }
  }
`;

export default function Login() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { input: { email, password } } })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}
