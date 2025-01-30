import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IRequestExtension } from "../../types";
import { NextFunction, Response } from "express";

dotenv.config();

type DecodedExtended = { username: string };

export const verifyJWT = (
  req: IRequestExtension,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(403).json({ message: "No token found. Please log in." });
      return;
    }
    jwt.verify(token, process.env.JWTSECRET!, function (err, decoded) {
      if (err) {
        console.log("Error: ", err.message);
        return res.status(500).json({ message: "JWT Verification Error." });
      }
      if (decoded) {
        const { username } = decoded as DecodedExtended;
        req.user = username;
      }
    });
    return next();
  } catch (e) {
    console.log(`Error in verifyJWT: ${e}`);
  }
};
