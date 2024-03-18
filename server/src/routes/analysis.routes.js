import { Router } from 'express'
import { upload } from '../middlewares/multer.middlewars.js'
import { summary } from '../controllers/summary.controllers.js';


const analysisRouter = Router();

analysisRouter.route("/summary").post(
    upload.single('pdf'),
    summary
)

export default analysisRouter