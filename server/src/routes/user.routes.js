import { Router } from "express";
<<<<<<< HEAD
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
  getHistory,
} from "../controllers/users.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import multer from "multer";
const upload1 = multer();

const userRouter = Router();

userRouter.route("/register").post(upload1.array(), registerUser);
userRouter.route("/login").post(upload1.array(), loginUser);
userRouter.route("/logoutUser").get(verifyJWT, logoutUser);
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/current-user").get(verifyJWT, getCurrentUser);
userRouter.route("/history").get(verifyJWT, getHistory);

export default userRouter;
=======
import { loginUser, registerUser, logoutUser, refreshAccessToken, getCurrentUser, getHistory } from "../controllers/users.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import multer from "multer";
const upload1 = multer()

const userRouter = Router()

userRouter.route('/register').post(upload1.array(), registerUser)
userRouter.route('/login').post(upload1.array(), loginUser)
userRouter.route('/logoutUser').get(verifyJWT, logoutUser)
userRouter.route('/refresh-token').post(refreshAccessToken)
userRouter.route('/current-user').get(verifyJWT, getCurrentUser)
userRouter.route('/history').get(verifyJWT, getHistory)

export default userRouter
>>>>>>> 3272427ebe3c0774b6dfc054fc77798bd8f8ec42
