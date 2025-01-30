import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const signJWT = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;
    const token = jwt.sign({ username: username }, process.env.JWTSECRET!, {
      expiresIn: "12h",
    });
    res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login sucessful" });
  } catch (e) {
    console.log(`Error in signJWT: ${e}`);
  }
};

export default signJWT;
