import useBusiness from "../hooks/useBusiness";
import styled from "styled-components";
import Popup from "../Components/Modal/Modal";
import TableList from "../Components/Table/TableList";
import CreateCard from "../Components/Cards/CreateCard";
import { useState } from "react";
import UpdateCard from "../Components/Cards/UpdateCard";
import { BsFillBagPlusFill } from "react-icons/bs";

export const useModalForm = () => {
  const { clearFields } = useBusiness();
  const [isOpen, setIsOpen] = useState(false);
  const openFormModal = () => setIsOpen(true);
  const closeFormModal = () => {
    setIsOpen(false);
    // clearFields();
    console.log("test");
  };

  return {
    isOpen,
    openFormModal,
    closeFormModal,
  };
};

const Dashboard = () => {
  const { ownCards, editCard } = useBusiness();
  const { isOpen, openFormModal, closeFormModal } = useModalForm();
  return (
    <Container>
      <h1>dashboard page</h1>
      <Popup isOpen={isOpen} onClose={closeFormModal}>
        {editCard ? (
          <UpdateCard />
        ) : (
          <CreateCard closeFormModal={closeFormModal} />
        )}
      </Popup>
      <Wrapper>
        <Button onClick={openFormModal}>
          <BsFillBagPlusFill size={30} color="blue" />
        </Button>
      </Wrapper>
      <TableList data={ownCards} openFormModal={openFormModal} />
    </Container>
  );
};
export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "column"};
  width: 100%;
  min-height: 100vh;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

const Button = styled.button`
  color: #000;
  background: none;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
`;
