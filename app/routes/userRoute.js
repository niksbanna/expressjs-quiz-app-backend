import { Router } from "express";
import { createUser, getAllUsers, getUserDetails } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/users/register", createUser);
userRouter.post("/users/login", createUser);
userRouter.get("/users/", getAllUsers);
userRouter.get("/users/:id", getUserDetails);


