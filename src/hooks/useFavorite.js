import { useState, useEffect, Fragment } from "react";
import useLogin from "./useLogin";
import useUser from "./useUser";
import styled from "styled-components";
import { IoHeart } from "react-icons/io5";

const Button = styled.button`
  background: none;
  position: absolute;
  white-space: nowrap;
  outline: none;
  color: #000;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 15px;
`;

const useFavorite = (card) => {
  const [favorite, setFavorite] = useState(null);
  const [color, setColor] = useState("");
  const { favorites, add, remove } = useUser();
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    const matching = () => {
      //declare a a vairble that hold a copy of the matching element that compering to the (card id) from the parameter value use find method.
      const card = favorites.find((val) => val._id === card._id);
      setFavorite(card);
    };
    matching();
  }, [card, favorites]);
  console.log(favorite);

  useEffect(() => {
    favorite ? setColor("red") : setColor("black");
  }, [favorite]);
};
