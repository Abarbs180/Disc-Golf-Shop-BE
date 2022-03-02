import pool from "../database.js";

const sql = `
  SELECT product.*, brand.name AS brand, "type".name AS "type"   
  FROM product
  JOIN brand ON product.brand_id = brand.id
  JOIN "type" ON product.type_id = "type".id
  WHERE product.id = $1
`;

async function getProductById(productId) {
  const res = await pool.query(sql, [productId]);
  return res.rows[0];
}

export default getProductById;
