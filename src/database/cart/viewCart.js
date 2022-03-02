import pool from "../database.js";

const sql = `
  SELECT cart.*, product.name AS product, brand.name AS brand, "type".name AS "type"
  FROM cart
  JOIN product ON cart.product_id = product.id
  JOIN brand ON product.brand_id = brand.id
  JOIN "type" ON product.type_id = "type".id
  WHERE cart.user_id = $1
`;

async function viewCart(userId) {
  const res = await pool.query(sql, [userId]);
  return res.rows;
}

export default viewCart;
