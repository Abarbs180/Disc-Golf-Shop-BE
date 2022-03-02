import catchErrors from "../catchErrors.js";
import getUserActivity from "../../database/user/getUserActivity.js";

const getUserActivityHandler = async (req, res, next) => {
  const { email } = req.body;
  const userActivity = await getUserActivity(email);

  res.status(200).json({ active: userActivity.active });
};

export default catchErrors(getUserActivityHandler);
