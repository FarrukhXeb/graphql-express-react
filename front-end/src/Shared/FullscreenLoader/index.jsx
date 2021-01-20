import React from "react";
import Loader from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FullscreenLoader() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Loader type="Puff" color={theme.primary} height={100} width={100} />
    </Wrapper>
  );
}
