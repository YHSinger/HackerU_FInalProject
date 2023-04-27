import auth from "../middleware/auth.js";
import { Router } from "express";
import cards from "../controllers/cards.js";
import authByRole from "../middleware/authByRole.js";
import proofOfExistance from "../middleware/proofOfExistance.js";

const cardsRouter = Router();

cardsRouter.post(
  "/new",
  auth,
  proofOfExistance(),
  authByRole(["business"]),
  cards.buildCard
);
cardsRouter.put("/edit/:id", auth, cards.editCard);
cardsRouter.get("/display-id/:id", auth, cards.displayCardId);
cardsRouter.get("/displayAll", cards.displayAllCard);
cardsRouter.get("/owncards", auth, cards.displayOwnCards);
cardsRouter.delete("/delete/:id", auth, cards.deleteCard);

export default cardsRouter;
