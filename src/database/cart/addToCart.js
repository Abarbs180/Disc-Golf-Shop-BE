import pool from "../database.js";

const sql = `
  INSERT INTO cart (user_id, product_id, quantity) 
  VALUES($1, $2, $3)
  ON CONFLICT ON CONSTRAINT cart_pkey
    DO
    UPDATE SET quantity = cart.quantity + $3;
`;

async function addToCart(userId, productId, quantity) {
  const res = await pool.query(sql, [userId, productId, quantity]);
  return res;
}

export default addToCart;
