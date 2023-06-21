import { Router } from "express";
import { getQuestions, getSingleQuestion, storeQuestions } from "../controllers/questionsController.js";

export const questionsRouter = Router();

questionsRouter.post("/questions", storeQuestions);
questionsRouter.get("/questions", getQuestions);
questionsRouter.get("/questions/:id", getSingleQuestion);


