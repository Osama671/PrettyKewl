import { Request } from "express";

export interface IRequestExtension extends Request {
  user?: { username?: string };
}
