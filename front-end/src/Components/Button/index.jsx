import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 3em;
  background-color: ${(props) => props.theme.primary};
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.7rem;
  &:hover {
    transition: 0.3s ease-in all;
    background-color: #17f56c;
  }
`;

export default function Button(props) {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
}
