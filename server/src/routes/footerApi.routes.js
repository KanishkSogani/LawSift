import { Router } from "express";
import { footer } from "../controllers/footer.controllers.js";

const footerRouter = Router()

footerRouter.route("/footer").post(footer)

export default footerRouter