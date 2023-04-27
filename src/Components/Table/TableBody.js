import React, { Fragment } from "react";
import { Tr, DeleteButton, EditButton } from "./TableStyles";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { CardContext } from "../../context/CardProvider";

const TableBody = ({ card, index, handleDelete, handleUpdate }) => {
  const { bizName, bizDescription, bizPhone, bizImage, bizAddress, _id } = card;

  return (
    <Fragment>
      {card && (
        <Tr index={index}>
          <td index={index} border="none">
            {index + 1}
          </td>
          <td>{bizName}</td>
          <td>{bizDescription}</td>
          <td>{bizAddress}</td>
          <td>{bizPhone}</td>
          <td>
            <span
              style={{
                display: "flex",
                position: "relative",
                width: "75px",
                height: "75px",
              }}
            >
              <img width="100%" src={bizImage} alt="" />
            </span>
          </td>
          <td border="none">
            <>
              {/* onClicks job is to activate the event (execute the function inside of it (callback)) callback is not executable that is why you need to use the arrow function inside the onclick in order for it to function.  */}
              <EditButton onClick={() => handleUpdate(card)}>edit</EditButton>
              <DeleteButton onClick={() => handleDelete(_id)}>
                delete
              </DeleteButton>
            </>
          </td>
        </Tr>
      )}
    </Fragment>
  );
};
export default TableBody;
