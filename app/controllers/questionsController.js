import catchAsyncErrors from "../../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../../utils/errorhandler.js";
import { Question } from "../models/questionsModel.js";

export const storeQuestions = catchAsyncErrors(async (req, res) => {

    const { question, options, correctOption } = req.body;
    const newQuestion = new Question({ question, options, correctOption });
    await newQuestion.save();
    res.json({ message: 'Question saved successfully' });

});

export const getQuestions = catchAsyncErrors(async (req, res) => {

    const questions = await Question.find();
    res.json(questions);

});

export const getSingleQuestion = catchAsyncErrors(async (req, res) => {

    const question = await Question.findById(req.params.id);
    if (!question) {
        return new ErrorHandler('Question not found', 404);
    }
    res.json(question);

});