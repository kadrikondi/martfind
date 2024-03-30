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

import {
  createSupermarket,
  getAllSupermarkets,
  getOneSupermarketById,
  updateSupermarket,
} from "../controller/suppermarketController";
import {
  updateUserPhoto,
  updateUserPhotoCloudinary,
} from "../controller/uploadcontroller";

//user  route
router.post("/newuser", RegisterUser);
router.post("/login", LoginUser);
router.put("/updateprofile/:id", UpdateProfile);
router.get("/user/:id", getOneUserById);
router.get("/users", getAllUsers);
router.delete("/user/:id", DeleteUser);
router.put("/user/updatepic/:id", updateUserPhoto);
router.put("/user/updateprofile/:id", updateUserPhotoCloudinary);

// suppermakert route
router.post("/apiv1/registersupermarket/:id", createSupermarket);
router.put("/apiv1/updatesupermarket/:id", updateSupermarket);
router.get("/apiv1/allsuppermarket", getAllSupermarkets);
router.get("/apiv1/suppermarket/:id", getOneSupermarketById);

export default router;
