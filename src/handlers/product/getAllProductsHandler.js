import catchErrors from "../catchErrors.js";
import getAllProducts from "../../database/product/getAllProducts.js";

const getAllProductsHandler = async (req, res, next) => {
  const products = await getAllProducts();
  res.json(products);
};

export default catchErrors(getAllProductsHandler);
