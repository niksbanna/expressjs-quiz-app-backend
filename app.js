import express from "express";
import morgan from "morgan";
import cors from 'cors';
import routes from "./app/routes/index.js";
import errorMiddleware from "./middlewares/error.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// error middleware
app.use(errorMiddleware);


export default app;