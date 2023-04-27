import styled, { css } from "styled-components";

const Shared = css`
  border: 1px solid #000;
  border-radius: 5px;
  color: #fff;
  width: 150px;
  height: 45px;
  margin: 15px;
  font-weight: 700;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  align-items: center;
`;

export const Content = styled.div`
  position: static;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
`;

export const CancelButton = styled.button`
  ${Shared}
  background-color: ${(props) => props.bgc};

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const RemoveButton = styled.button`
  ${Shared}
  background-color: ${(props) => props.bgc};

  &:hover {
    background-color: #f80000;
    color: #000;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  width: 550px;
  padding: 50px;
  border-radius: 10px;
  background-color: #f0e6e6;
  border: 2px solid #767676;
`;

export const Buttons = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  color: #000;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
