import { Router } from "express";
import addToCartHandler from "../handlers/cart/addToCartHandler.js";
import removeFromCartHandler from "../handlers/cart/removeFromCartHandler.js";
import viewCartHandler from "../handlers/cart/viewCartHandler.js";
import updateQuantityHandler from "../handlers/cart/updateQuantityHandler.js";
import checkToken from "../middlewares/checkToken.js";

const cartRouter = Router();

cartRouter.use(checkToken);

cartRouter.get("/", viewCartHandler);

cartRouter.post("/add", addToCartHandler);

cartRouter.delete("/remove", removeFromCartHandler);

cartRouter.post("/updateQuantity", updateQuantityHandler);

export default cartRouter;
