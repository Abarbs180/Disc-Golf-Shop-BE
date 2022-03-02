import pool from "../database.js";

const sql = `
  UPDATE "user" 
  SET active = NOT active 
  WHERE email = $1;
`;

async function reactivateUser(email) {
  const res = await pool.query(sql, [email]);
  return res;
}

export default reactivateUser;
