import jwt from "jsonwebtoken";
import extractToken from "../../utils/extractToken.js";

function checkAdminToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  const bearerToken = extractToken(bearerHeader);

  req.token = bearerToken;
  const verifyToken = jwt.verify(req.token, "privateKey");

  req.role = verifyToken.role;

  if (req.role === "admin") {
    next();
  } else {
    res.sendStatus(403);
  }
}

export default checkAdminToken;
