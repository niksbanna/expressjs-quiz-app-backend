import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../../utils/errorhandler.js";
import { Question } from "../models/questionsModel.js";
import { Score } from "../models/scoresModel.js";

export const storeFeedback = catchAsyncErrors(async (req, res) => {
    const { questionId, selectedOption } = req.body;

    // Find the question by its ID
    const question = await Question.findById(questionId);
    if (!question) {
        throw new ErrorHandler('Question not found', 404);
    }

    const isCorrect = question.correctOption === selectedOption;

    const { username } = req.user;

    let score = await Score.findOne({ username });

    if (!score) {
        score = new Score({
            username,
            score: 0
        });
    }

    if (isCorrect) {
        score.score += 10;
    }
    await req.user.scores.push(score._id);
    await req.user.save();
    await score.save();

    res.json({ isCorrect, score });
});

