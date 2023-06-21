import { feedbackRouter } from "./feedbackRoute.js";
import { questionsRouter } from "./questionsRoute.js";
import { scoresRouter } from "./scoresRoute.js";
import { userRouter } from "./userRoute.js";

export default function (app) {
    app.use('/api', userRouter);
    app.use('/api', questionsRouter);
    app.use('/api', scoresRouter);
    app.use('/api', feedbackRouter);
}