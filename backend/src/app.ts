import express, {
  type Response,
  type Request,
  type Application,
} from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "./service/product.service";
import { Product } from "../generated/prisma";

const app: Application = express();
app.use(express.json());

app.get("/", async (_req, resp: Response) => {
  const products = await getAllProducts();
  resp.status(200).json({ ...products });
});

app.get("/:id", async (req: Request, resp: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  if (!product)
    return resp.status(404).json({ message: "No product were found" });
  return resp.status(200).json({ product });
});

app.post("/", async (req: Request, resp: Response) => {
  const product = req.body;
  const createdProduct = await createProduct(product);
  if (!product)
    return resp.status(404).json({ message: "No product were found" });
  return resp.status(200).json({ product });
});

export default app;
