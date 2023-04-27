import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
  //margin: 1rem;
  grid-gap: 2rem;
  text-align: center;

  @media screen and(max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
  }
  @media screen and(max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
  @media screen and(max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 330px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  color: black;
  box-shadow: 0 0 32px 8px #cccc;
`;

export const Img = styled.img`
  width: 270px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 10px;
`;
export const Clicked = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: none;
`;
const styles = { CardsWrapper, CardWrapper, Clicked };

export default styles;
