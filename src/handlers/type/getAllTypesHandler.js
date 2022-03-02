import catchErrors from "../catchErrors.js";
import getAllTypes from "../../database/type/getAllTypes.js";

const getAllTypesHandler = async (req, res, next) => {
  const types = await getAllTypes();
  res.status(200).json(types);
};

export default catchErrors(getAllTypesHandler);
