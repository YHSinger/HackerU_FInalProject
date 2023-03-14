import React from "react";
import { CardWrapper, Img, Clicked } from "./cardsStyles";

const Card = (props) => (
  <Clicked onClick={() => props.openModal(props.card)}>
    <CardWrapper>
      <Img src={props.card.img} alt="picture" />

      <p> {props.card.name} </p>
    </CardWrapper>
  </Clicked>
);

export default Card;
