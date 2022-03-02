import catchErrors from "../catchErrors.js";
import getProductById from "../../database/product/getProductById.js";

const intRegEx = /^\d+$/;

const getProductByIdHandler = async (req, res, next) => {
  if (!intRegEx.test(req.params.productId)) {
    return res.status(400).json({ error: `ProductId is not a valid integer` });
  }

  const product = await getProductById(req.params.productId);

  if (!product) {
    return res
      .status(404)
      .json({ error: `ProductId ${req.params.productId} not found` });
  }

  res.json(product);
};

export default catchErrors(getProductByIdHandler);
