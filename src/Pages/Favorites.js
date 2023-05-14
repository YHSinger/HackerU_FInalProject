import React from "react";
import styled from "styled-components";
import useUser from "../hooks/useUser";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "column"};
  width: 100%;
  min-height: 100vh;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

const Favorites = () => {
  const { favorites } = useUser();
  console.log(favorites);
  return (
    <Container>
      <h1>Favorites page</h1>
    </Container>
  );
};

export default Favorites;
