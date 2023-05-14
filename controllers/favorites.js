import User from "../Model/User.js";
import Card from "../Model/Cards.js";

export const addToFavorites = async (req, res, next) => {
  const card = await Card.findById(req.params.id);
  console.log(card);
  try {
    const update = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { favorites: card._id } },
      { new: true }
    );
    res.send(update);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const displayFavorites = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const favorites = await Card.find({ _id: { $in: user.favorites } });
  res.send(favorites);
};

export const removeFromFavorites = async (req, res, next) => {
  const removeCard = await Card.findById(req.params.id);

  if (!removeCard) {
    return res.status(400)("Card does not exist");
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { favorites: removeCard._id } },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const favorites = {
  addToFavorites,
  displayFavorites,
  removeFromFavorites,
};
export default favorites;
