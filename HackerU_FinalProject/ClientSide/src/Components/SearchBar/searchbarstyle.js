import styled from "styled-components";

export const SearchContainer = styled.div`
  display: grid;
  position: relative;
  text-align: center;
  justify-content: center;
  margin: auto 0;
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin-top: 55px;
  display: flex;
`;

export const SearchInput = styled.input`
  color: #fff;
  font-size: 20px;
  padding-left: 22px;
  height: 57px;
  width: 250px;
  cursor: text;
  border: none;
  border-bottom: 1px solid #000;
  background-color: ${({ text }) => (text ? "#fff" : "rgb(41, 41, 41)")};
  color: ${({ text }) => (!text ? "#fff" : " rgb(41, 41, 41)")};

  ::placeholder {
    color: #fff;
    letter-spacing: 20px;
    font-size: 20px;
    align-items: center;
    text-align: center;
    padding-left: 25px;
  }

  &:focus {
    color: ${({ text }) => (!text ? "#fff" : " rgb(41, 41, 41)")};
    background-color: #fff;
    outline: none;
    color: #000;
    ::placeholder {
      color: #ccc;
    }
  }
`;

export const ClearText = styled.div`
  height: 57px;
  width: 35px;
  display: grid;
  place-items: center;
  background-color: ${({ text }) => (text ? "#fff" : "rgb(41, 41, 41)")};
  color: ${({ text }) => (!text ? "#fff" : " rgb(41, 41, 41)")};
  border-bottom: 1px solid #000;
  ${SearchInput}:focus ~ & {
    color: #000;
    background-color: #fff;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  height: 57px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: ${({ text }) => (text ? null : "5px")};
  border: none;
  padding-left: 11px;
  padding-top: 6px;
  width: 65px;
  background-color: ${({ text }) => (text ? "#fff" : " rgb(41, 41, 41)")};
  text-decoration: none;
  place-items: center;
  cursor: pointer;
  border-bottom: 1px solid #000;
  color: ${({ text }) => (!text ? "#fff" : " rgb(41, 41, 41)")};

  &:active {
    color: ${({ text }) => (text ? "#fff" : " rgb(41, 41, 41)")};
    background-color: ${({ text }) => (!text ? "#fff" : " rgb(41, 41, 41)")};
  }
`;

export const DisplayResult = styled.div`
  z-index: 2;
  margin-top: 2px;
  width: 300px;
  height: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  display: block;
`;

export const ItemsContainer = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgb(41, 41, 41);
  }
`;

export const Item = styled.p`
  display: flex;
  margin-left: 10px;
  color: ${({ index, focusedIndex }) => index === focusedIndex && "#fff"};
  gap: 275px;
`;

export const Dropdown = styled.div`
  position: relative;
  width: 440px;
  height: 35px;
  float: left;
  color: #efefef;
  text-align: center;
`;

export const DropdownContent = styled.div`
  background-color: ${({ index, focusedIndex }) =>
    index === focusedIndex ? "rgb(41, 41, 41)" : "#fff"};
  overflow: hidden;
  display: block;
`;
