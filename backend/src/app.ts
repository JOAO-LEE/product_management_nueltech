import express, { type Application } from "express";
import productRoutes from "./routes/product.route";

const app: Application = express();
app.use(express.json());

app.use("/", productRoutes);

export default app;
