import { NextFunction, Request, Response } from "express";
import { ValidateCreateAccount } from "../../shared/validations/formValidations";
import { fetchUser } from "../repo/user";
import bcrypt from "bcrypt";

export const validateRegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, password2, email } = req.body;
    const errors = ValidateCreateAccount(username, password, password2, email);
    if (Object.values(errors).some((ele) => ele !== "")) {
      function printErrors() {
        Object.entries(errors).forEach(([key, value]) => {
          const displayValue = value === "" ? "No Error" : value;
          console.log(`${key}: ${displayValue} | VALUE: ${req.body[key]}`);
        });
      }
      console.error(`------Mismatched fields------`);
      console.error(printErrors());
      res.status(400).json({ message: "Validation Error" });
      return;
    }
    next();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.cookies.token) {
      res.status(401).json({ message: "Already logged in, please log out" });
      return;
    }
    const { username: user, password: pass } = req.query;
    if (user === undefined || pass === undefined)
      throw new Error("Missing fields");
    const username = String(user);
    const password = String(pass);

    const userDetailsFromDB = await fetchUser(username);
    if (!userDetailsFromDB) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const isHashSimilar = await bcrypt.compare(
      password,
      userDetailsFromDB.password
    );

    if (isHashSimilar === true) {
      return next();
    } else {
      res.status(403).json({ message: "Incorrect username or Email" });
    }
  } catch (e) {
    console.log(`Server Error: ${e}`);
  }
};
