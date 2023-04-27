import { useEffect, useState } from "react";

const useModal = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [viewItem, setVeiwItem] = useState(null);
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const openModal = (card) => {
    //find card
    const findCard = data?.find((valueItem) => valueItem._id === card._id);
    if (!findCard) {
      return;
    }
    //open popup
    setIsOpen(true);
    //update veiw item object
    setVeiwItem(findCard);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVeiwItem(null);
  };
  return { closeModal, openModal, isOpen, viewItem };
};

export default useModal;
