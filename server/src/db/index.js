<<<<<<< HEAD
import mongoose from "mongoose";
=======
import mongoose from 'mongoose'
>>>>>>> 3272427ebe3c0774b6dfc054fc77798bd8f8ec42
// import { DB_Name } from '../constants.js'

const connectDB = async () => {
  try {
    // const dbNameEncoded = encodeURIComponent(DB_Name)
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/LawSift`
    );
    console.log(
      `MongoDB connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error : ", error);
    process.exit(1);
  }
};

<<<<<<< HEAD
export default connectDB;
=======
export default connectDB
>>>>>>> 3272427ebe3c0774b6dfc054fc77798bd8f8ec42
