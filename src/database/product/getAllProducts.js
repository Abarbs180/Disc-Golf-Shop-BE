import pool from "../database.js";

const sql = `
  SELECT product.*, brand.name AS brand, "type".name AS "type"   
  FROM product
  JOIN brand ON product.brand_id = brand.id
  JOIN "type" ON product.type_id = "type".id
`;

async function getAllProducts() {
  const res = await pool.query(sql);
  return res.rows;
}

export default getAllProducts;
