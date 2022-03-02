import catchErrors from "../catchErrors.js";
import verifyAccount from "../../database/user/verifyAccount.js";

const verifyAccountHandler = async (req, res, next) => {
  const { id, uuid } = req.body;
  const verifyUser = await verifyAccount(id, uuid);

  if (!verifyUser.rowCount) {
    return res.status(400).json({ error: "Account could not be verified" });
  }

  return res.status(200).json({ success: "Account has been verified" });
};

export default catchErrors(verifyAccountHandler);
