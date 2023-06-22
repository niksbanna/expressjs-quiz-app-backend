import { Router } from "express";
import { storeFeedback } from "../controllers/feedbackController.js";
import { isAuthenticatedUser } from "../../middlewares/auth.js";

export const feedbackRouter = Router();

feedbackRouter.post("/feedback", isAuthenticatedUser, storeFeedback);


