import React from "react";
import styled from "styled-components";
import View from "../Components/hero/Veiw";
import Cards from "../Components/Cards/Cards";

const HomeContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 0.5fr 1.2fr;
  grid-template-areas:
    "hero"
    "content";
  text-align: center;
  transition: all 0.25s ease-in-out;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "hero"
      "content";
  }
  color: white;
`;

const HeroSection = styled.div`
  background: #1f2128;
  color: white;
  grid-area: hero;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <View />
      </HeroSection>
      <ContentBox>
        <Content>
          <Cards />
        </Content>
      </ContentBox>
    </HomeContainer>
  );
};

export default Home;
