import pool from "../database.js";

const sql = `
  UPDATE "user"
  SET "uuid" = $2
  WHERE email = $1
  RETURNING "id";
`;

async function storeUserUUID(email, uuid) {
  const res = await pool.query(sql, [email, uuid]);

  return res.rows[0].id;
}

export default storeUserUUID;
