import pool from "../../../database/database.js";

const sql = `
  UPDATE product
  SET availability = $2
  WHERE "name" = $1
`;

async function updateAvailability(productName, availability) {
  const res = await pool.query(sql, [productName, availability]);
  return res;
}

export default updateAvailability;
