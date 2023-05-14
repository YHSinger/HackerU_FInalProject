import React, { useState, useEffect, createContext, Fragment } from "react";
import {
  addToFavorites,
  removeFromFavorites,
  displayFavorites,
} from "../services/user";
import useLogin from "../hooks/useLogin";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const { isLoggedIn } = useLogin();
  const [favorites, setFavorites] = useState(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    //function
    const displayUserFavorites = async () => {
      const response = await displayFavorites();
      setFavorites(response.data);
    };
    // if statement
    if (isLoggedIn) {
      displayUserFavorites();
    }
    //execution
  }, [rendered, isLoggedIn]);

  const handleRendering = () => setRendered(!rendered);

  const add = async (card) => {
    const response = await addToFavorites(card._id);
    console.log(
      "return from the server as a response message : ",
      response.data
    );
    //option 1 auto re-rendering
    handleRendering();

    //option 2 non rendered menuall updates [...data, card]
    const updated = [...favorites, card];
    setFavorites(updated);
  };

  const remove = async (id) => {
    await removeFromFavorites(id);
    //option 1  auto re-rendering
    handleRendering();
    // option 2
    const result = favorites.filter((cardValue) => cardValue._id !== id);
    setFavorites(result);
  };

  return (
    <userContext.Provider value={{ favorites, add, remove }}>
      <Fragment>{children}</Fragment>
    </userContext.Provider>
  );
};

export default UserProvider;
