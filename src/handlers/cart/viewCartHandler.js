import catchErrors from "../catchErrors.js";
import viewCart from "../../database/cart/viewCart.js";

const viewCartHandler = async (req, res, next) => {
  const cartData = await viewCart(req.id);
  res.json(cartData);
};

export default catchErrors(viewCartHandler);
