import { Router } from "express";
import getAllTypesHandler from "../handlers/type/getAllTypesHandler.js";

const typesRouter = Router();

typesRouter.get("/", getAllTypesHandler);

export default typesRouter;
