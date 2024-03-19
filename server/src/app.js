import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
import analysisRouter from "./routes/analysis.routes.js";
import footerRouter from "./routes/footerApi.routes.js";
app.use("/analysis", analysisRouter);
app.use("/api", footerRouter);

export { app };
