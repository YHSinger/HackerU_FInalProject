import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal, ModalButton, CardStyle } from "./ModalStyles";

const Popup = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <ModalButton onClick={onClose}>
        <AiOutlineClose size={55} />
      </ModalButton>
      <CardStyle>{children}</CardStyle>
    </Modal>
  );
};

export default Popup;
