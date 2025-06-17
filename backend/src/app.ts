import express, {
  type Response,
  type Request,
  type Application,
} from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./service/product.service";
import { Product } from "../generated/prisma";

import productRoutes from "./routes/product.route";

const app: Application = express();
app.use(express.json());

app.use("/", productRoutes);

export default app;
