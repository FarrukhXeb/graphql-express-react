import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../../Components/Button";
import Dropdown from "../../Components/Dropdown";
import Input from "../../Components/Input";
import { authContext } from "../../Context/AuthContext";
import FullscreenLoader from "../../Shared/FullscreenLoader";

const GET_ALL_COUNTRIES = gql`
  query GET_COUNTRIES {
    countries {
      name
      id
      abbreviation
    }
  }
`;

const REGISTER_USER = gql`
  mutation REGISTER_USER($input: UserInput!) {
    register(input: $input) {
      token
      user {
        email
        id
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

export default function Register() {
  const {
    auth: { isAuthenticated },
    setAuthData,
  } = useContext(authContext);
  const { data, loading } = useQuery(GET_ALL_COUNTRIES);
  const [execRegister] = useMutation(REGISTER_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [countryId, setCountryId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, firstName, lastName, countryId };
    execRegister({ variables: { input: data } })
      .then(({ data }) => setAuthData(data.register))
      .catch((err) => console.log(err.message));
  };
  if (loading) return <FullscreenLoader />;
  const { countries } = data;
  if (isAuthenticated) return <Redirect to={"/"} />;
  return (
    <div className={"auth-wrapper"}>
      <form className={"form"}>
        <Input
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          name="firstName"
        />
        <Input
          placeholder="Last Name"
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          name="lastName"
        />
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
        <Dropdown
          defaultValue={""}
          onChange={(e) => setCountryId(e.target.value)}
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </Dropdown>
        <Link to={"/login"}>Already registered? Click here</Link>
        <Button onClick={handleSubmit}>Register</Button>
      </form>
    </div>
  );
}
