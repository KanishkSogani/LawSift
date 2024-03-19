import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors(
    {
        origin : process.env.CORS_ORGIN
    }
))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static('public'))
app.use(cookieParser())

//routes
import analysisRouter from './routes/analysis.routes.js';
import footerRouter from './routes/footerApi.routes.js';
app.use('/analysis',analysisRouter)
app.use('/api', footerRouter)

export {app}