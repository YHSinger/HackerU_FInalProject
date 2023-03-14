import { useState, useEffect } from "react";

const useSlider = (initialData) => {
  const [{ images, activeIndex }, setImages] = useState({
    images: initialData,
    activeIndex: 0,
  });
  //state hook we make change only by the setName() operation
  const [selected, setSelected] = useState(0);

  //counter
  //when start , update, ends Components life cycle.
  useEffect(() => {
    const imagesClicked = () => {
      const lastIndex = images.size - 1;
      if (activeIndex < 0) {
        setImages((prev) => ({ ...prev, activeIndex: lastIndex }));
        setSelected(lastIndex);
      }
      if (activeIndex > lastIndex) {
        setImages((prev) => ({ ...prev, activeIndex: 0 }));
      }
      setSelected(activeIndex);
    };
    imagesClicked();
  }, [activeIndex, images]);

  useEffect(() => {
    const slider = setInterval(() => {
      setImages((prev) => ({ ...prev, activeIndex: activeIndex + 1 }));
    }, 5000);
    return () => clearInterval(slider);
  }, [activeIndex]);

  const moveTo = (newIndex) => () => {
    // setSelected(newIndex);
    if (newIndex === -1) {
      setImages((prev) => ({ ...prev, activeIndex: images.size - 1 }));
      //  setSelected(images.size - 1);
      return;
    }

    if (newIndex === images.size) {
      setImages((prev) => ({ ...prev, activeIndex: 0 }));
      //setSelected(0);
      return;
    }
    setImages((prev) => ({ ...prev, activeIndex: newIndex }));
  };
  return { images, moveTo, activeIndex, selected };
};

export default useSlider;
