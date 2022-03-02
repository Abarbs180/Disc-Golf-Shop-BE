import catchErrors from "../catchErrors.js";
import addToCart from "../../database/cart/addToCart.js";

const addToCartHandler = async (req, res, next) => {
  await addToCart(req.id, req.body.productId, req.body.quantity);

  res.sendStatus(200);
};

export default catchErrors(addToCartHandler);
