import { useContext } from "react";
import { CardContext } from "../context/CardProvider";

export const useCards = () => useContext(CardContext);

export default useCards;
