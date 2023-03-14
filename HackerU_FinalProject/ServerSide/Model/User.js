import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 250 },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 150,
    unique: true,
  },
  password: { type: String, required: true, minlength: 2, maxlength: 250 },
  roles: {
    type: [{ type: String, enum: ["user", "buisness", "admin"] }],
    default: ["user"],
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, name: this.name, roles: this.roles },
    process.env.SECRET_KEY,
    {
      expiresIn: "2d",
    }
  );
};
const User = mongoose.model("User", userSchema);

export default User;
