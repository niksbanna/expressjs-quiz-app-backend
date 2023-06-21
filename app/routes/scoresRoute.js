import { Router } from "express";
import { getScore, storeScores } from "../controllers/scoresController.js";

export const scoresRouter = Router();

scoresRouter.post("/scores", storeScores);
scoresRouter.get("/scores/:username", getScore);


