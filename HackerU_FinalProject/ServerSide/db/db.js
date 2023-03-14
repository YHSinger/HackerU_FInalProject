import mongoose from "mongoose";

const connectDatabase = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://127.0.0.1/rest-api2");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
