import express from "express";

import { verifyJWT } from "../middleware/verifyJWT.ts";
import {
  validateLogin,
  validateRegisterUser,
} from "../middleware/validations.ts";

import signJWT from "../middleware/signJWT.ts";
import {
  clearCookie,
  getAuthenticatedUser,
  registerUser,
} from "../controllers/user.ts";

const router = express.Router();

// I like this route uwu
router.get("/", (req, res) => {
  res.json({ message: "heyaas" });
});

router.get("/login", validateLogin, signJWT);

router.get("/authcheck", verifyJWT, getAuthenticatedUser);

router.get("/logout", verifyJWT, clearCookie);

router.post("/register", validateRegisterUser, registerUser);

export default router;
