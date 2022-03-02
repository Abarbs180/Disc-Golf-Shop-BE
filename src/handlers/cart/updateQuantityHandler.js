import catchErrors from "../catchErrors.js";
import updateQuantity from "../../database/cart/updateQuantity.js";

const updateQuantityHandler = async (req, res, next) => {
  await updateQuantity(req.id, req.body.productId, req.body.quantity);

  res.sendStatus(200);
};

export default catchErrors(updateQuantityHandler);
