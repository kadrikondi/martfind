import express from "express";
const router = express.Router();
import {
  DeleteUser,
  LoginUser,
  RegisterUser,
  UpdateProfile,
  getAllUsers,
  getOneUserById,
} from "../controller/userController";

import { createSupermarket } from "../controller/suppermarketController";

//user  route
router.post("/newuser", RegisterUser);
router.post("/login", LoginUser);
router.put("/updateprofile/:id", UpdateProfile);
router.get("/user/:id", getOneUserById);
router.get("/users", getAllUsers);
router.delete("/user/:id", DeleteUser);

// suppermakert route
router.post("/registersupermarket/:id", createSupermarket);

export default router;
