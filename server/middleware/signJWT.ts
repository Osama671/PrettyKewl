import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const signJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.query;
    const token = jwt.sign({ username: username }, process.env.JWTSECRET!, {
      expiresIn: "12h",
    });
    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login sucessful" });
    next();
  } catch (e) {
    console.log(`Error in signJWT: ${e}`);
  }
};

export default signJWT;
