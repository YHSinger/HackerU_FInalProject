import axios from "axios";
import mongoose from "mongoose";
import { Card, validateCard, generateBizNumber } from "../Model/Cards.js";
import cardsRouter from "../routes/cards.js";

export const buildCard = async (req, res) => {
  const { error } = validateCard(req.body);
  if (error)
    return res
      .status(400)
      .json({ message: error.details.map((d) => d.message) });

  let card = new Card({
    bizNumber: await generateBizNumber(),
    user_id: req.user._id,
    ...req.body,
  });

  card.bizImage =
    card.bizImage ??
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  card = await card.save();
  res.json(card);
};

export const editCard = async (req, res, next) => {
  const payload = {
    _id: req.params.id,
    user_id: req.user._id,
  };
  const { error } = validateCard(req.body);
  if (error)
    return res
      .status(400)
      .json({ message: error.details.map((d) => d.message) });
  try {
    const editedCard = await Card.findOneAndUpdate(payload, req.body, {
      new: true,
    });
    editedCard.save();
    res.status(200).send(editedCard);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const displayCardId = async (req, res, next) => {
  const validateId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!validateId) {
    return res.status(400).send("Invalid id");
  }

  const payload = {
    _id: req.params.id,
    user_id: req.user._id,
  };

  const card = await Card.findOne(payload);
  if (!card) {
    return res.status(400).send("Card Doesn't Exsist");
  }
  res.status(200).send(card);
};

export const displayAllCard = async (req, res, next) => {
  const allcards = await Card.find({});
  res.status(200).send(allcards);
};

export const deleteCard = async (req, res, next) => {
  const payload = {
    _id: req.params.id,
    user_id: req.user._id,
  };
  const deletedcard = await Card.findOneAndDelete(payload);
  if (!deletedcard) {
    return res.status(400).send(`${req.params.id} Cannot Be Found`);
  }
  res.status(200).send("Card Deleted Successfully");
};

export const displayOwnCards = async (req, res, next) => {
  try {
    const cards = await Card.find({ user_id: req.user._id });
    res.status(200).send(cards);
  } catch (error) {
    res.status(400).send(error);
  }
};

const cards = {
  buildCard,
  editCard,
  displayCardId,
  displayAllCard,
  deleteCard,
  displayOwnCards,
};

export default cards;
