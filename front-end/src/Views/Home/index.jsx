import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

export default function Home() {
  const {
    auth: { user },
  } = useContext(authContext);
  return (
    <div>
      <h1>
        Welcome {user.firstName} {user.lastName}
      </h1>
      <p>Country Name: {user.country.name}</p>
    </div>
  );
}
