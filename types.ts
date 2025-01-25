import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IRequestExtension extends Request {
  user?: string | JwtPayload | {username: string}
  cookies: { token?: string | undefined };
}
