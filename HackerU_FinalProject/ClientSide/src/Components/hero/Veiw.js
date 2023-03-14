import React from "react";
import { SlideWrapper, GalleryImage, HeroButton, Slider } from "./herostyles";
import slideImages from "./data";
import { ReactComponent as Left } from "./assets/chevron-left.svg";
import { ReactComponent as Right } from "./assets/chevron-right.svg";
import useSlider from "./useSlider";

const SlideShow = (props) => {
  const { moveTo, activeIndex, images, selected } = useSlider(props.data);
  return (
    <SlideWrapper>
      <GalleryImage alt="image" src={images.get(activeIndex)} />
      <HeroButton position="left" onClick={moveTo(activeIndex - 1)}>
        <Left />
      </HeroButton>
      <HeroButton position="right" onClick={moveTo(activeIndex + 1)}>
        <Right />
      </HeroButton>
      {Array.from(images).map(([key, value]) => (
        <Slider
          key={key}
          selected={selected}
          pointer={key}
          onClick={moveTo(key)}
        ></Slider>
      ))}
    </SlideWrapper>
  );
};

const View = () => <SlideShow data={slideImages} />;

export default View;
