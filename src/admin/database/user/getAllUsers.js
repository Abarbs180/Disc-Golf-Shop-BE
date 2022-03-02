import pool from "../../../database/database.js";

const sql = `
  SELECT "user".*
  FROM "user"
`;

async function getAllUsers() {
  const res = await pool.query(sql, []);
  return res.rows;
}

export default getAllUsers;
