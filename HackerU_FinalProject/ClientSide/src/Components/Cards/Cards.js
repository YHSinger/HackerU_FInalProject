import React, { useState } from "react";
import data from "./data.json";
import styles from "./cardsStyles";
import Card from "./Card";
import useModal from "../Modal/useModal";
import VeiwCard from "./veiwCard";
import Search from "../SearchBar/Search";

const Cards = () => {
  const [cards, setCards] = useState(data.cards);
  const { closeModal, openModal, isOpen, viewItem } = useModal(data.cards);
  console.log(viewItem);
  return (
    <div>
      <Search openModal={openModal} />
      <styles.CardsWrapper>
        {cards.map((value, i) => (
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
