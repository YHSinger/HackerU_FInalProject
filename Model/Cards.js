import mongoose from "mongoose";
import Joi from "joi";
import _ from "lodash";

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  bizDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  bizAddress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
  },
  bizPhone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 11,
  },
  bizImage: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 9_999_999_999,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Card = mongoose.model("Card", cardSchema);

const cardJoiSchema = Joi.object({
  bizName: Joi.string().min(2).max(255).required(),
  bizDescription: Joi.string().min(2).max(1024).required(),
  bizAddress: Joi.string().min(2).max(500).required(),
  bizPhone: Joi.string()
    .min(9)
    .max(11)
    .required()
    .regex(/^0[2-9][-]?\d{7,9}$|^05[0-9][-]?\d{7,9}$|^07[7,3][-]?\d{7,9}$/),
  bizImage: Joi.string().min(2).max(255),
});

export const generateBizNumber = async () => {
  while (true) {
    let randomNumber = _.random(100, 9_999_999_999);
    let card = await Card.findOne({ bizNumber: randomNumber });
    if (!card) return String(randomNumber);
  }
};

export const validateCard = (card) => cardJoiSchema.validate(card);

export default Card;
