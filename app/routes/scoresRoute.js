import { Router } from "express";
import { getAllScores, getLeaderboard, getScore, storeScores } from "../controllers/scoresController.js";

export const scoresRouter = Router();

// scoresRouter.post("/scores", storeScores);
scoresRouter.get("/scores", getAllScores);
scoresRouter.get("/scores/:username", getScore);
scoresRouter.get("/leaderboard", getLeaderboard);


