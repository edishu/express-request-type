import { Router } from "express";
import { product } from "./product";

const productRouter = Router();

// Routes
productRouter.post("/product", product);

export { productRouter };
