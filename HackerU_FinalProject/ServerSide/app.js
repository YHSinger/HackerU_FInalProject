import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/config.js";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.js";
import cardsRouter from "./routes/cards.js";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/users", userRoutes);
app.use("/api/cards", cardsRouter);

const port = process.env.PORT || config.server.port;
app.listen(port, console.log("server working on port", port));
