import React, { useState, useEffect, createContext, Fragment } from "react";
import { readAllCards } from "../services/cards";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  /* Public cards */

  const [cards, setCards] = useState(null);
  const [rendered, setrendered] = useState(false);

  useEffect(() => {
    const handleCards = async () => {
      const response = await readAllCards();
      setCards(response.data);
    };
    handleCards();
  }, [rendered]);

  const handleChange = () => {
    setrendered((prev) => !prev);
  };
  console.log(cards);
  return (
    <CardContext.Provider value={{ handleChange, cards }}>
      <Fragment>{children}</Fragment>
    </CardContext.Provider>
  );
};
export default CardProvider;
