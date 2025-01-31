import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IRequestExtension extends Request {
  user?: string | JwtPayload;
  cookies: { token?: string | undefined };
}
