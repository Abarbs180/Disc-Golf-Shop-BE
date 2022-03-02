import pool from "../database.js";

const sql = `
  UPDATE cart
  SET quantity = $3
  WHERE cart.product_id = $2 AND cart.user_id = $1  
`;

async function updateQuantity(userId, productId, quantity) {
  const res = await pool.query(sql, [userId, productId, quantity]);
  return res;
}

export default updateQuantity;
