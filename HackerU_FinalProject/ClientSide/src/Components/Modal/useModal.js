import { useEffect, useState } from "react";

const useModal = (initial) => {
  const [data] = useState(initial);
  const [isOpen, setIsOpen] = useState(false);
  const [viewItem, setVeiwItem] = useState(null);

  const openModal = (card) => {
    //find card
    const findCard = data?.find((valueItem) => valueItem._id === card._id);
    if (!findCard) {
      return;
    }
    //open popup
    setIsOpen(true);
    //update veiw item object
    setVeiwItem(card);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return { closeModal, openModal, isOpen, viewItem };
};

export default useModal;
