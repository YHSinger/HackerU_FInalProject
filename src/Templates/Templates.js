import React, { Fragment } from "react";
import { GlobalStyles, Container } from "../styles/styles";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

const MainContainer = styled.main`
  background: #c4c4c4;
  color: black;
  grid-area: main;
`;

const Main = (props) => <MainContainer>{props.children}</MainContainer>;

const Templates = (props) => {
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  );
};

export default Templates;
