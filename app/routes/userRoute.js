import { Router } from "express";
import { createUser } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/users", createUser);


