import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../../utils/errorhandler.js";
import { Question } from "../models/questionsModel.js";

export const storeFeedback = catchAsyncErrors(async (req, res) => {

    const { questionId, selectedOption } = req.body;
    const question = await Question.findById(questionId);
    if (!question) {
        return new ErrorHandler('Question not found', 404);
    }
    const isCorrect = question.correctOption === selectedOption;
    res.json({ isCorrect });

});
