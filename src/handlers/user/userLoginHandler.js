import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import catchErrors from "../catchErrors.js";
import userLogin from "../../database/user/userLogin.js";

const userLoginHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const login = await userLogin(email);

  if (login.rows.length === 0) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  if (!login.rows[0].verified) {
    return res.status(400).json({ error: "Account has not been verified" });
  }

  const match = await bcrypt.compare(password, login.rows[0].password);

  if (match === false) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: login.rows[0].id, role: login.rows[0].role },
    "privateKey",
    {
      expiresIn: "1h",
    }
  );
  res.json({ token });
};

export default catchErrors(userLoginHandler);
