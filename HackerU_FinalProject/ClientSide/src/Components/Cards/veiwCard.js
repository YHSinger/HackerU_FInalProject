import { useState, useEffect } from "react";
import Popup from "../Modal/Modal";
import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "row"};
  background-color: #fff;
  border: 3px solid #ccc;
  color: #000;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 75%;
  height: 100%;
  margin: auto;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  flex: ${(props) => props.flex};
  order: ${(props) => props.order};
  width: 100%;
  background-color: ${(props) => props.bg ?? ""};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2px;
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  line-height: 70px;
  margin: 0 auto;
  text-align: center;
  align-content: center;
  margin: auto 0;
  width: 75%;

  @media (max-width: 700px) {
    line-height: 40px;
  }
`;

export const Container = styled.div`
  margin: auto;
  display: block;
  max-width: 1000px;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
    width: 75%;
    align-items: center;
  }
`;

export const Img = styled.img`
  display: flex;
  border: 3px solid #000;
  width: 100%;
  padding: 0;
  margin: auto 0;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: auto 0;
  align-items: center;
  text-align: center;
  justify-content: end;
  align-content: center;
  width: 100%;
  color: #000;
  font-size: 30px;
  outline: none;
  border: 2px solid #000;
  background-color: #fff;
  position: relative;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const VeiwCard = ({ isOpen, item, onClose }) => {
  //create a card state ==> card ,setCard
  const [card, setCard] = useState(null);
  //useEffect() - update the render
  /**
   *  components amount V
   * component updated  V
   * component destroy
   */
  //when component amoount and every time item is changed
  useEffect(() => {
    setCard(item);
  }, [item]);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      {card && (
        <Container>
          <ContainerBox>
            <Box order="1" flex="50%">
              <Img src={card?.img} alt="" />
            </Box>
            <Box order="2" flex="25%">
              <Content>
                <h1> {card?.name}</h1>
                <p>{card?.description}</p>
              </Content>
            </Box>
          </ContainerBox>
        </Container>
      )}
    </Popup>
  );
};

export default VeiwCard;
