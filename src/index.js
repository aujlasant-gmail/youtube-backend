// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
const app = express();
(async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_name}`
    );
    app.on("error", (error) => {
      console.log("express app connection error : ", error);
      throw erorr;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening at port ${process.env.PORT}`);
      console.log(
        `/n MONGODB connected !! DB Host: ${connectionInstance.connection.host}`
      );
    });
  } catch (error) {
    console.log("MONGODB connection error", error);
    throw error;
  }
})();
*/
