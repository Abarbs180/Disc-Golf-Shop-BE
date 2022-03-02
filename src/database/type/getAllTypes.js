import pool from "../database.js";

const sql = `
SELECT "type".name, "type".id   
FROM "type"
`;

async function getAllTypes() {
  const res = await pool.query(sql);
  return res.rows;
}

export default getAllTypes;
