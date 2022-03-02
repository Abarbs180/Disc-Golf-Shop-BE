import pool from "../../../database/database.js";

const sql = `
  INSERT INTO product ("name", brand_id, type_id)
  SELECT $1, $2, $3
  WHERE NOT EXISTS (
    SELECT "name" FROM product
    WHERE "name" = $1
  );
`;

async function addProduct(productName, brandId, typeId) {
  const res = await pool.query(sql, [productName, brandId, typeId]);
  return res;
}

export default addProduct;
