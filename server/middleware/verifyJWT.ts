import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyJWT = (req, _, next) => {
  const token = req.cookies.token;
  if (!token) return next();
  jwt.verify(token, process.env.JWTSECRET!, function (err, decoded) {
    if (err) {
      console.log("Error: ", err.message);
    }
    req.user = decoded;
  });
  return next();
};
