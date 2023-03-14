import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "column"};
  width: 100%;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
  order: ${(props) => props.order};
  width: 100%;
  background-color: ${(props) => props.bg ?? ""};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  @media (max-width: 700px) {
    min-height: 100%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;

  @media (max-width: 700px) {
    height: 450px;
    justify-content: center;
    align-items: center;
  }
`;
const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Content = (props) => (
  <Container direction="row">
    <Box order="1" bg="red">
      <Inner>
        <SubTitle>This is a test</SubTitle>
        <p>test test test test</p>
      </Inner>
    </Box>
    <Box order="2" bg="blue">
      <Inner>
        <SubTitle>Test subtitle</SubTitle>
        <p>test test test</p>
        {/*   <img src={img2} style={{ width: "100%" }} alt="" /> */}
      </Inner>
    </Box>
    <Box order="3" bg="yellow">
      <Inner>
        <SubTitle>Test subtitle</SubTitle>
        <p>test test test</p>
      </Inner>
    </Box>
    <Box order="4" bg="green">
      <Inner>
        <SubTitle>Test subtitle</SubTitle>
        <p>test test test</p>
        {/*       <img src={img2} style={{ width: "100%" }} alt="" /> */}
      </Inner>
    </Box>
  </Container>
);

export default Content;
