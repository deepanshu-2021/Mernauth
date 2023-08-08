import { Router } from "express";
import { protect } from "../middleware/authmiddleware.js";
import {
  userAuth,
  userDel,
  userLogout,
  userProfile,
  userReg,
  userUpdate,
} from "../controller/controlller.js";
const router = Router();
router.post("/", userReg);
router.post("/auth", userAuth);
router.get("/profile", protect, userProfile);
router.put("/profile", protect, userUpdate);
router.post("/logout", userLogout);
router.delete("/delete", userDel);
export { router };
