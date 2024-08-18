import { Router } from "express";
import { user } from "./user";

const userRouter = Router();

// Routes
userRouter.post("/user", user);

export { userRouter };
