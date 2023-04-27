import React, { Fragment } from "react";
import { Table, Container, Heading } from "./TableStyles";
import TableBody from "./TableBody";
import useBusiness from "../../hooks/useBusiness";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const TableList = (props) => {
  const { openConfirmDelete } = useBusiness();

  const handleUpdate = (card) => console.log(card, "  Update works");

  const handleDelete = (cardId) => openConfirmDelete(cardId);

  // console.log(props.data);
  return (
    <Container>
      <Heading>Buisness Card</Heading>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {props.data?.map((card, index) => (
            <Fragment key={index}>
              <TableBody
                index={index}
                card={card}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </Fragment>
          ))}
        </tbody>
      </Table>
      <ConfirmDelete />
    </Container>
  );
};

export default TableList;
