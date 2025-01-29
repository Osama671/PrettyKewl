import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IRequestExtension } from "../../types";
import { NextFunction } from "express";

dotenv.config();

type DecodedExtended = { username: string };

export const verifyJWT = (req: IRequestExtension, _, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return next();
    jwt.verify(token, process.env.JWTSECRET!, function (err, decoded) {
      if (err) {
        console.log("Error: ", err.message);
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
