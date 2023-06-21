import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../../utils/errorhandler.js";
import { Score } from "../models/scoresModel.js";

export const storeScores = catchAsyncErrors(async (req, res) => {

    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    await newScore.save();
    res.json({ message: 'Score saved successfully' });

});

export const getScore = catchAsyncErrors(async (req, res) => {

    const username = req.params.username;
    const score = await Score.findOne({ username });
    if (!score) {
        return new ErrorHandler('Score not found', 404);
    }
    res.json({ username: score.username, score: score.score });

});