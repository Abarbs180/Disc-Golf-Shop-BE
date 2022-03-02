import pool from "../database.js";

const sql = `
  DELETE FROM cart
  WHERE cart.user_id = $1 AND cart.product_id = $2
`;

async function removeFromCart(userId, productId) {
  const res = await pool.query(sql, [userId, productId]);
  return res;
}

export default removeFromCart;
