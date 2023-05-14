import axios from "axios";

export const readAllCards = () =>
  axios.get(`http://localhost:3900/api/cards/displayAll`);

export const readownercards = () =>
  axios.get(`http://localhost:3900/api/cards/owncards`);

export const updateCard = ({ _id, ...crendentials }) =>
  axios.put(`http://localhost:3900/api/cards/edit/${_id}`, crendentials);

export const deleteCard = (_id) =>
  axios.delete(`http://localhost:3900/api/cards/delete/${_id}`);

export const createCard = (crendentials) =>
  axios.post(`http://localhost:3900/api/cards/new`, crendentials);
