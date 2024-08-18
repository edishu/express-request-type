import cors from "cors";
import express from "express";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.send("Hello world");
});
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
