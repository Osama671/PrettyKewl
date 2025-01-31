import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const signJWT = async (req: Request, res: Response) => {
  try {
    const { username, rememberme } = req.query;
    const token = jwt.sign({ username: username }, process.env.JWTSECRET!, {
      expiresIn: "12h",
    });
    if (rememberme !== "null") {
      res.cookie("rememberme", "yes");
    } else {
      res.cookie("rememberme", "no");
    }
    res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login sucessful" });
  } catch (e) {
    console.log(`Error in signJWT: ${e}`);
  }
};

export default signJWT;
