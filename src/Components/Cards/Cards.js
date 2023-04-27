import React, { useState, useEffect } from "react";
import styles from "./cardsStyles";
import Card from "./Card";
import useModal from "../Modal/useModal";
import VeiwCard from "./veiwCard";
import Search from "../SearchBar/Search";

const Cards = ({ initialData }) => {
  const [cards, setCards] = useState(null);
  const { closeModal, openModal, isOpen, viewItem } = useModal(initialData);
  useEffect(() => {
    setCards(initialData);
  }, [initialData]);
  console.log(viewItem);
  return (
    <div>
      <Search openModal={openModal} data={cards} />
      <styles.CardsWrapper>
        {cards?.map((value, i) => (
          <div key={i}>
            <Card
              card={value}
              closeModal={closeModal}
              openModal={openModal}
              isOpen={isOpen}
            />
            <VeiwCard item={viewItem} isOpen={isOpen} onClose={closeModal} />
          </div>
        ))}
      </styles.CardsWrapper>
    </div>
  );
};
export default Cards;
