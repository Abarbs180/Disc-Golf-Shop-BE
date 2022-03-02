import { Router } from "express";
import checkAdminToken from "../admin/middlewares/checkAdminToken.js";
import getAllUsersHandler from "../admin/handlers/user/getAllUsersHandler.js";
import addProductHandler from "../admin/handlers/product/addProductHandler.js";
import toggleUserActivityHandler from "../admin/handlers/user/toggleUserActivityHandler.js";
import updateAvailabilityHandler from "../admin/handlers/product/updateAvailabilityHandler.js";

const adminRouter = Router();

adminRouter.use(checkAdminToken);

adminRouter.get("/allUsers", getAllUsersHandler);

adminRouter.post("/addProduct", addProductHandler);

adminRouter.post("/toggleUserActivity", toggleUserActivityHandler);

adminRouter.post("/updateAvailability", updateAvailabilityHandler);

export default adminRouter;
