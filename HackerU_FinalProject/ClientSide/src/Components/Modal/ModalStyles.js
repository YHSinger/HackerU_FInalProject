import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
`;

export const ModalButton = styled.button`
  display: flex;
  position: fixed;
  background: none;
  float: right;
  color: #fff;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  justify-content: baseline;
  left: 3%;
  top: 3%;
`;

export const CardStyle = styled.div`
  position: static;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
`;
