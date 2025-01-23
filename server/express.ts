import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieparser from "cookie-parser";
import session from "express-session";
import createUser, { fetchUser } from "./repo/user.ts";
import jwt from "jsonwebtoken";
import { verifyJWT } from "./middleware/verifyJWT.ts";
import { IRequestExtension } from "../types.ts";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieparser("heya"));
app.use(session({ secret: "heya" }));

app.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  createUser(username, password);
  res.json({ message: "Success!" });
});

app.get(
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

app.get("/user", verifyJWT, (req: IRequestExtension, res: Response) => {
  try {
    if (req.user) {
      const { username } = req.user;
      res.json({ user: username });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    console.error(`Internal Server Error: ${e}`);
  }
});

app.get("/logout", verifyJWT, (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "Successfully removed token" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
