import React, { useState, useEffect, createContext, Fragment } from "react";
import {
  readAllCards,
  readownercards,
  createCard,
  updateCard,
  deleteCard,
} from "../services/cards";
import useCards from "../hooks/useCards";
import useConfirmDelete from "../Components/ConfirmDelete/useConfirmDelete";

export const BizContext = createContext();

const BizProvider = ({ children }) => {
  const [editCard, setEditCard] = useState(null);
  /* Busniess ownner cards */
  const [ownCards, setOwnCards] = useState(null);
  const [rendered, setRendered] = useState(false);
  const { handleChange } = useCards();

  const { openConfirmDelete, closeConfirmDelete, itemId, isOpen } =
    useConfirmDelete();

  //display user own cards - read
  useEffect(() => {
    const handleOwnerCards = async () => {
      const response = await readownercards();
      setOwnCards(response.data);
    };
    handleOwnerCards();
  }, [rendered]);

  const create = async (credentials) => {
    //  API create new card
    await createCard(credentials);
    //rendering operations in frot end app
    //1. update card provider
    handleChange();
    //2. update business provider
    setRendered(!rendered);
    //setRendered((prev)=>!prev);
  };

  const update = async (credentials) => {
    //API update operation
    await updateCard(credentials);
    // handle two phases of rendereing: first for the global cards provider, and second for the owner cards.
    handleChange();
    setRendered((prev) => !prev);
  };

  const cardCredentials = (data) => setEditCard(data);

  const clearFields = () => setEditCard(null);

  const remove = async () => {
    await deleteCard(itemId);
    handleChange();
    setRendered(!rendered);
    closeConfirmDelete();
  };

  console.log(editCard);
  return (
    <BizContext.Provider
      value={{
        ownCards,
        create,
        update,
        remove,
        isOpen,
        openConfirmDelete,
        closeConfirmDelete,
        itemId,
        cardCredentials,
        editCard,
        clearFields,
      }}
    >
      <Fragment>{children}</Fragment>
    </BizContext.Provider>
  );
};
export default BizProvider;
