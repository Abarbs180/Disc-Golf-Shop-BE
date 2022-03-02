import extractToken from "../utils/extractToken.js";
import jwt from "jsonwebtoken";

function checkToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  const bearerToken = extractToken(bearerHeader);

  req.token = bearerToken;
  const verifyToken = jwt.verify(req.token, "privateKey");

  req.id = verifyToken.id;
  next();
}

export default checkToken;
