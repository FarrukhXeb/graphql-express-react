import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Dropdown from "../../Components/Dropdown";
import Input from "../../Components/Input";
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

export default function Register() {
  const { data, loading } = useQuery(GET_ALL_COUNTRIES);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, firstName, lastName };
    console.log(data);
  };
  if (loading) return <FullscreenLoader />;
  const { countries } = data;
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
        <Dropdown defaultValue={""}>
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
