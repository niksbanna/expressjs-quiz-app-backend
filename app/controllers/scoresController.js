import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../../utils/errorhandler.js";
import { Score } from "../models/scoresModel.js";

export const storeScores = catchAsyncErrors(async (req, res) => {

    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    await newScore.save();
    res.json({ message: 'Score saved successfully' });

});

export const getAllScores = catchAsyncErrors(async (req, res) => {

    const scores = await Score.find();
    res.json({ scores });

});

export const getScore = catchAsyncErrors(async (req, res) => {

    const username = req.params.username;
    const score = await Score.findOne({ username });
    if (!score) {
        return new ErrorHandler('Score not found', 404);
    }
    res.json({ username: score.username, score: score.score });

});

export const getLeaderboard = catchAsyncErrors(async (req, res) => {

    const leaderboard = await Score.find().sort({ score: -1 }).limit(10);
    res.json({ leaderboard });

});