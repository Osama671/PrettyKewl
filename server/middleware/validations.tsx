import { NextFunction, Request, Response } from "express";
import { ValidateCreateAccount } from "../../shared/validations/formValidations";

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
      console.error(`------Mismatched fields------`)
      console.error(printErrors())
      res.status(401).json({message: "Validation Error"})
      return
    }
    next();
  } catch (e) {
    console.log(`Unknown error: ${e}`);
  }
};
