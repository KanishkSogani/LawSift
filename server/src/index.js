import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
<<<<<<< HEAD
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed: ", error);
  });
=======
.then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error('MongoDB connection failed: ', error);
})
>>>>>>> 3272427ebe3c0774b6dfc054fc77798bd8f8ec42

// app.listen(process.env.PORT, () => {
//   console.log(`Server is listening on port ${process.env.PORT}`);
// });
