import pool from "../database.js";

const sql = `
  SELECT active
  FROM "user"
  WHERE email = $1
`;

async function getUserActivity(email) {
  const res = await pool.query(sql, [email]);
  return res.rows[0];
}

export default getUserActivity;
