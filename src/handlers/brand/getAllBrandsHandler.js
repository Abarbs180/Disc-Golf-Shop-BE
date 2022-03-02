import catchErrors from "../catchErrors.js";
import getAllBrands from "../../database/brand/getAllBrands.js";

const getAllBrandsHandler = async (req, res, next) => {
  const brands = await getAllBrands();
  res.status(200).json(brands);
};

export default catchErrors(getAllBrandsHandler);
