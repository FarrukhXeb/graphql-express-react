import { gql, useQuery } from "@apollo/client";
import React from "react";

const TEST_QUERY = gql`
  query GET_USERS {
    users {
      email
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(TEST_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
