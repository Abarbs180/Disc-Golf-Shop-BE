import catchErrors from "../../../handlers/catchErrors.js";
import getAllUsers from "../../database/user/getAllUsers.js";

const getAllUsersHandler = async (req, res, next) => {
  const allUsers = await getAllUsers();

  res.status(200).json(allUsers);
};

export default catchErrors(getAllUsersHandler);
