import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import { authAdmin, upload } from "../middlewares/index.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

export default adminRouter;