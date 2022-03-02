import catchErrors from "../catchErrors.js";
import reactivateUser from "../../database/user/reactivateUser.js";

const reactivateUserHandler = async (req, res, next) => {
  const { email } = req.body;

  await reactivateUser(email);

  res.sendStatus(200);
};

export default catchErrors(reactivateUserHandler);
