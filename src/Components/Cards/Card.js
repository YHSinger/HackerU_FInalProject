import React from "react";
import { CardWrapper, Img, Clicked } from "./cardsStyles";

const Card = (props) => (
  <Clicked onClick={() => props.openModal(props.card)}>
    <CardWrapper>
      <Img src={props.card.bizImage} alt="picture" />

      <p> {props.card.bizName} </p>
    </CardWrapper>
  </Clicked>
);

export default Card;
