import pool from "../database.js";

const sql = `
SELECT product.*, brand.name AS brand   
FROM product
JOIN brand ON product.brand_id = brand.id
WHERE brand.name = $1
`;

async function getProductsByBrand(brandName) {
  const res = await pool.query(sql, [brandName]);

  return res.rows;
}

export default getProductsByBrand;
