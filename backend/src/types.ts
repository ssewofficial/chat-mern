import { NextFunction, Request, Response } from "express";

export type Route = (
  req: Request & { user?: any },
  res: Response,
  next?: NextFunction | undefined
) => Promise<any> | any;
