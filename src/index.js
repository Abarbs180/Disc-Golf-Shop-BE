import express from "express";
import cors from "cors";
import productsRouter from "./routers/products.js";
import brandsRouter from "./routers/brands.js";
import typesRouter from "./routers/types.js";
import adminRouter from "./routers/admin.js";
import userRouter from "./routers/user.js";
import cartRouter from "./routers/cart.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRouter);

app.use("/brands", brandsRouter);

app.use("/types", typesRouter);

app.use("/admin", adminRouter);

app.use("/user", userRouter);

app.use("/cart", cartRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(port, () => {
  console.log(`Disc golf store listening at http://localhost:${port}`);
});
