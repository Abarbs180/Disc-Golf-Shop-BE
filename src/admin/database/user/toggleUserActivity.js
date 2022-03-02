import pool from "../../../database/database.js";

const sql = `
  UPDATE "user" 
  SET active = NOT active 
  WHERE "id" = $1;
`;

async function toggleUserActivity(id) {
  const res = await pool.query(sql, [id]);
  return res;
}

export default toggleUserActivity;
