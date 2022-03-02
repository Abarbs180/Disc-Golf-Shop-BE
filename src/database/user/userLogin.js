import pool from "../database.js";

const sql = `
  SELECT *
  FROM "user"
  WHERE "email" = $1
`;

async function userData(email) {
  const userData = await pool.query(sql, [email]);
  return userData;
}

export default userData;
