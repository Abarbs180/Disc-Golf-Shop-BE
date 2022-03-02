import pool from "../database.js";

const sql = `
  UPDATE "user"
  SET verified = 'true'
  WHERE "id" = $1 AND "uuid" = $2 
`;

async function verifyAccount(id, uuid) {
  const res = await pool.query(sql, [id, uuid]);

  return res;
}

export default verifyAccount;
