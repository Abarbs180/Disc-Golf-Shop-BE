import catchErrors from "../../../handlers/catchErrors.js";
import addProduct from "../../database/product/addProduct.js";

const addProductHandler = async (req, res, next) => {
  const { productName, brandId, typeId } = req.body;
  const product = await addProduct(productName, brandId, typeId);

  if (!product.rowCount) {
    res.status(400).json({ error: `Product '${productName}' Already Exists` });
  }

  res.status(200).json("Product Created");
};

export default catchErrors(addProductHandler);
