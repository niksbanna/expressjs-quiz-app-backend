import { Router } from "express";
import { storeFeedback } from "../controllers/feedbackController.js";

export const feedbackRouter = Router();

feedbackRouter.post("/feedback", storeFeedback);


