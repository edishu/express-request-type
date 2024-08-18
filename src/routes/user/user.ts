import { Request, Response } from "express";

export const user = (req: Request, res: Response) => {
  res.json({ from: "/user/user" });
};
