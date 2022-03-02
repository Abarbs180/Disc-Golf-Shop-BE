import { Router } from "express";
import userLoginHandler from "../handlers/user/userLoginHandler.js";
import addNewUserHandler from "../handlers/user/addNewUserHandler.js";
import verifyAccountHandler from "../handlers/user/verifyAccountHandler.js";
import reactivateUserHandler from "../handlers/user/reactivateUserHandler.js";
import getUserActivityHandler from "../handlers/user/getUserActivityHandler.js";

const userRouter = Router();

userRouter.post("/login", userLoginHandler);

userRouter.post("/register", addNewUserHandler);

userRouter.post("/verifyAccount", verifyAccountHandler);

userRouter.post("/getUserActivity", getUserActivityHandler);

userRouter.post("/reactivateAccount", reactivateUserHandler);

// TODO: Add route for reset password email

export default userRouter;
