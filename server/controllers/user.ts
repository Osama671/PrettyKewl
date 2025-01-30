import { Response, Request } from "express";
import createUser from "../repo/user";
import { IRequestExtension } from "../../types";
import { v4 as uuid } from "uuid";

export const clearCookie = async (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "Successfully removed token" });
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const id = uuid();
    await createUser(username, password, email, id);
    console.log("User created");
    res.status(200).json({ message: "Success!" });
  } catch (e) {
    console.log(`Error while registering: ${e}`);
  }
};

export const getAuthenticatedUser = (req: IRequestExtension, res: Response) => {
  try {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    console.error(`Internal Server Error: ${e}`);
  }
};
