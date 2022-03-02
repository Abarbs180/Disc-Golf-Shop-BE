import catchErrors from "../../../handlers/catchErrors.js";
import toggleUserActivity from "../../database/user/toggleUserActivity.js";

const toggleUserActivityHandler = async (req, res, next) => {
  const { id } = req.body;
  await toggleUserActivity(id);

  res.sendStatus(200);
};

export default catchErrors(toggleUserActivityHandler);
