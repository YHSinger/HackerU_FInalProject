import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Courier New', Courier, monospace;
  }
 `;
export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "nav nav nav"
    "main main main"
    "footer footer footer";
  text-align: center;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 2fr 1fr;
    grid-template-areas:
      "nav"
      "main"
      "footer";
  }
  color: white;
`;
export default styled;
