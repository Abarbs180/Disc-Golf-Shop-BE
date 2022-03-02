import pool from "../database.js";

const sql = `
SELECT brand.name, brand.id   
FROM brand
`;

async function getAllBrands() {
  const res = await pool.query(sql);
  return res.rows;
}

export default getAllBrands;
