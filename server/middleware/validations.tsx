import { NextFunction, Request, Response } from "express";
import { ValidateCreateAccount } from "../../shared/validations/formValidations";

export const validateRegisterUser = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const { username, password, password2, email } = req.body;
    const errors = ValidateCreateAccount(username, password, password2, email);
    if (Object.values(errors).some((ele) => ele !== "")) {
      throw new Error(`Mismatched fields: ${errors}`);
    }
    next();
  } catch (e) {
    console.log(`Error in validateRegisterUser: ${e}`);
  }
};
