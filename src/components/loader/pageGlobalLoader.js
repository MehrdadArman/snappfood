import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100wh;
  background-color: "red";
`;

const PageGlobalLoader = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default PageGlobalLoader;
