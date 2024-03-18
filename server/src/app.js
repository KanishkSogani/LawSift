import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
    {
        origin : process.env.CORS_ORGIN
    }
))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static('public'))

//routes
import analysisRouter from './routes/analysis.routes';
app.use('/analysis',analysisRouter)

export {app}