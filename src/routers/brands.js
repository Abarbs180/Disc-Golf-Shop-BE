import { Router } from "express";
import getAllBrandsHandler from "../handlers/brand/getAllBrandsHandler.js";

const brandsRouter = Router();

brandsRouter.get("/", getAllBrandsHandler);

export default brandsRouter;
