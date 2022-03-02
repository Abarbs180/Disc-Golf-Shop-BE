import catchErrors from "../catchErrors.js";
import getProductsByBrand from "../../database/product/getProductsByBrand.js";

const getProductsByBrandHandler = async (req, res, next) => {
  // Capitalize first letter of each word in brand name
  const capBrand = req.params.brandName
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const brand = await getProductsByBrand(capBrand);

  // Better way of checking for empty array?
  if (brand.length == 0) {
    return res.status(404).json({
      error: `Brand name '${req.params.brandName}' not found`,
    });
  }

  res.json(brand);
};

export default catchErrors(getProductsByBrandHandler);
