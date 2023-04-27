import useBusiness from "../hooks/useBusiness";
import styled from "styled-components";
import Popup from "../Components/Modal/Modal";
import TableList from "../Components/Table/TableList";

const Dashboard = () => {
  const { ownCards } = useBusiness();
  return (
    <Container>
      <h1>dashboard page</h1>
      <TableList data={ownCards} />
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
  } ;
`;
