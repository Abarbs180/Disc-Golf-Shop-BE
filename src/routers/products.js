import { Router } from "express";
import getProductByIdHandler from "../handlers/product/getProductByIdHandler.js";
import getProductsByBrandHandler from "../handlers/product/getProductsByBrandHandler.js";
import getAllProductsHandler from "../handlers/product/getAllProductsHandler.js";

const productsRouter = Router();

productsRouter.get("/", getAllProductsHandler);

productsRouter.get("/:productId", getProductByIdHandler);

productsRouter.get("/brands/:brandName", getProductsByBrandHandler);

export default productsRouter;
