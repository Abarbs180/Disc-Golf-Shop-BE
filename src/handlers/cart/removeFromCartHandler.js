import catchErrors from "../catchErrors.js";
import removeFromCart from "../../database/cart/removeFromCart.js";

const removeFromCartHandler = async (req, res, next) => {
  await removeFromCart(req.id, req.body.productId);

  res.sendStatus(200);
};

export default catchErrors(removeFromCartHandler);
