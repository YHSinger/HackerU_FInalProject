import React from "react";
import styled, { css } from "styled-components";
import useBusiness from "../../hooks/useBusiness";

const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  align-items: center;
`;

const CardStyle = styled.div`
  position: static;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
`;
export const CancelModal = () => {
  const { open, close } = useBusiness();
  if (!open) return null;
  return (
    <Modal>
      <CardStyle>
        <Cancel open={open} close={close} />
      </CardStyle>
    </Modal>
  );
};

/*  Cancel body container*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  width: 550px;
  padding: 50px;
  border-radius: 10px;
  background-color: #f0e6e6;
  border: 2px solid #767676;
`;

const Buttons = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  color: #000;
  flex-wrap: wrap;
`;

const Text = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const Shared = css`
  border: 1px solid #000;
  border-radius: 5px;
  color: #fff;
  width: 150px;
  height: 45px;
  margin: 15px;
  font-weight: 700;
`;

const CancelButton = styled.button`
  ${Shared}
  background-color: ${(props) => props.bgc};

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const RemoveButton = styled.button`
  ${Shared}
  background-color: ${(props) => props.bgc};

  &:hover {
    background-color: #f80000;
    color: #000;
  }
`;
const Cancel = () => {
  const { remove } = useBusiness();
  return (
    <Wrapper>
      <Container>
        <Text>Are You Sure You Want To Delete This Item ?</Text>
        <Buttons>
          <RemoveButton bgc="red" onClick={remove}>
            Delete
          </RemoveButton>
          <CancelButton bgc="black">No</CancelButton>
        </Buttons>
      </Container>
    </Wrapper>
  );
};
