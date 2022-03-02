import pool from "../database.js";
import bcrypt from "bcrypt";

const sql = `
  INSERT INTO "user" (email, password)
  SELECT $1, $2
  WHERE NOT EXISTS (
    SELECT email FROM "user"
    WHERE email = $1
  );
`;

async function addNewUser(email, password) {
  const hashPassword = await bcrypt.hash(password, 10);
  const res = await pool.query(sql, [email, hashPassword]);
  return res;
}

export default addNewUser;
