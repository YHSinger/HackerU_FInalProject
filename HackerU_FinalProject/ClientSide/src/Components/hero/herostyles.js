import styled, { css } from "styled-components";

export const Slider = styled.div`
  display: inline-block;
  position: relative;
  top: -9%;
  width: 35px;
  height: 10px;
  outline: none;
  accent-color: #000;
  opacity: 0.9;
  visibility: visible;
  border-radius: 10%;
  margin: 15px 12px 0px;
  background-color: ${({ pointer, selected }) =>
    pointer === selected ? "yellow" : "black"};
  cursor: pointer;
  :active {
    background-color: #878787;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 92.5vh;

  @media (max-width: 1800px) {
    height: 100%;
    height: 92.5vh;
  }

  @media (max-width: 1400px) {
    height: 100%;
    height: 90vh;
  }
`;

export const GalleryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  z-index: -1;
`;

export const HeroButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px 7px 5px 7px;
  border-radius: 50%;
  border: none;
  background: #fff;
  opacity: 0.5;
  width: 32px;
  height: 32px;
  ${({ position }) =>
    position === "left" &&
    css`
      left: 10px;
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      right: 10px;
    `}
`;
