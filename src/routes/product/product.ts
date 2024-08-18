import { Request, Response } from "express";

export const product = (req: Request, res: Response) => {
  res.json({ from: "/product/product" });
};
