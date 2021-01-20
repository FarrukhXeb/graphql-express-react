import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  margin-bottom: 0.6em;
  input {
    width: 100%;
    border-radius: 0.2em;
    padding: 0.5em 0.4em;
    border: 0.1em solid #afadad;
    outline: none;
    @media only screen and (max-width: 426px) {
      font-size: 0.6rem;
    }
  }
`;

export default function Input({ feedback, ...rest }) {
  return (
    <StyledInput>
      <input {...rest} />
    </StyledInput>
  );
}
