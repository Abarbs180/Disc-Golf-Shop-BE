import catchErrors from "../../../handlers/catchErrors.js";
import updateAvailability from "../../database/product/updateAvailability.js";

const updateAvailabilityHandler = async (req, res, next) => {
  const { productName, availability } = req.body;
  await updateAvailability(productName, availability);

  res.sendStatus(200);
};

export default catchErrors(updateAvailabilityHandler);
