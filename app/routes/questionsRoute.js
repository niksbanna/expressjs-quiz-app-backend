import { Router } from "express";
import { getQuestions, getRandomQuestion, getSingleQuestion, storeQuestions } from "../controllers/questionsController.js";

export const questionsRouter = Router();

questionsRouter.post("/questions", storeQuestions);
questionsRouter.get("/questions", getQuestions);
questionsRouter.get("/questions/random", getRandomQuestion);
questionsRouter.get("/questions/:id", getSingleQuestion);


