import React from "react";
import useBusiness from "../../hooks/useBusiness";
import {
  Modal,
  Content,
  CancelButton,
  RemoveButton,
  Wrapper,
  Container,
  Buttons,
  Text,
} from "./styled";

const Cancel = () => {
  const { remove, closeConfirmDelete } = useBusiness();
  return (
    <Wrapper>
      <Container>
        <Text>Are you sure you would like to Delete this Card ?</Text>
        <Buttons>
          <RemoveButton bgc="red" onClick={remove}>
            Yes
          </RemoveButton>
          <CancelButton bgc="black" onClick={closeConfirmDelete}>
            No
          </CancelButton>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

const ConfirmDelete = () => {
  const { isOpen } = useBusiness();
  if (!isOpen) {
    return null;
  }
  return (
    <Modal>
      <Content>
        <Cancel />
      </Content>
    </Modal>
  );
};

export default ConfirmDelete;
