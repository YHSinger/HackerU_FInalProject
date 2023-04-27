import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  th {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
  }

  td {
    border: 1px solid #000;
  }
`;

const SharedButton = css`
  color: #000;
  position: absolute;
  white-space: nowrap;
  outline: none;
  width: 75px;
  height: 75px;
  border: 0.5px solid #000;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const Tr = styled.tr`
  td,
  button {
    background-color: ${(props) => {
      if ((props.index + 1) % 2 === 0) {
        return "#ccc";
      }

      if ((props.index + 1) % 2 === 1) {
        return "#A5A5A5";
      }
    }};

    span {
      display: flex;
      position: relative;
      width: 75px;
      height: 75px;
    }

    img {
      width: 100%;
    }
  }
`;

const SharedHover = css`
  color: white;
  transition: background-color 0.4s ease-in;
`;

export const Heading = styled.h2`
  margin-bottom: ${({ bottom }) => (bottom ? bottom : "24px")};
  text-align: ${({ align }) => (align ? align : "center")};
  font-size: 35px;
  color: ${({ color }) => (color ? color : "#000")};
  line-height: 1.1;
  font-weight: 600;
`;

export const EditButton = styled.button`
  background-color: ${(props) => {
    if ((props.index + 1) % 2 === 0) {
      return "#ccc";
    }

    if ((props.index + 1) % 2 === 1) {
      return "#A5A5A5";
    }
  }};
  ${SharedButton};
  &:hover {
    ${SharedHover}
    background-color: ${({ inverse }) => inverse ?? "#009601"};
  }
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => {
    if ((props.index + 1) % 2 === 0) {
      return "#ccc";
    }

    if ((props.index + 1) % 2 === 1) {
      return "#A5A5A5";
    }
  }};
  ${SharedButton};
  &:hover {
    ${SharedHover}
    background-color: #B13737;
  }
`;
