import { Router } from "express";
import { loginUser, registerUser, logoutUser, refreshAccessToken, getCurrentUser } from "../controllers/users.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/logoutUser').get(verifyJWT, logoutUser)
userRouter.route('/refresh-token').post(refreshAccessToken)
userRouter.route('/current-user').get(verifyJWT, getCurrentUser)

export default userRouter