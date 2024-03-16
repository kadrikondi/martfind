import express from "express";
const router = express.Router();
import controllers from "../controller/userController";

//route
router.post("/newuser", controllers.registerUser);

export default router;
