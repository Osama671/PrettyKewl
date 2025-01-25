import express, { NextFunction, Request, Response } from "express";

import createUser, { fetchUser } from "../repo/user.ts";
import jwt from "jsonwebtoken";
import { verifyJWT } from "../middleware/verifyJWT.ts";
import { IRequestExtension } from "../../types.ts";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    console.log("hey")
  const { username, password } = req.body;
  createUser(username, password);
  res.json({ message: "Success!" });
});

router.get(
  "/login",
  verifyJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    const { username: user } = req.query;
    if (user === undefined) throw new Error("username undefined");
    const username = String(user);

    const userFromDB = await fetchUser(username);
    if (username.toLowerCase() === userFromDB.username.toLowerCase()) {
      const token = jwt.sign({ username: username }, process.env.JWTSECRET!, {
        expiresIn: "12h",
      });
      res
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Login sucessful" });
      next();
    }
  }
);

router.get("/fetchuser", verifyJWT, (req: IRequestExtension, res: Response) => {
  try {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    console.error(`Internal Server Error: ${e}`);
  }
});

router.get("/logout", verifyJWT, (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "Successfully removed token" });
});

router.get("/", (req, res) => {
    res.json({message: "heyaas"})
})

export default router