import express, {
  type Response,
  type Request,
  type Application,
} from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./service/product.service";
import { Product } from "../generated/prisma";

const app: Application = express();
app.use(express.json());

app.get("/", async (_req, resp: Response) => {
  const products = await getAllProducts();
  resp.status(200).json({ data: products });
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
  await createProduct(product);
  return resp.status(201).json({ product });
});

app.put("/:id", async (req: Request, resp: Response) => {
  const { id } = req.params;
  const productToUpdate = req.body;
  const product = await getProductById(+id);
  if (!product)
    return resp.status(404).json({ message: "No product were found" });
  const updatedProduct = await updateProduct(productToUpdate);
  return resp.status(200).json({ updatedProduct });
});

export default app;
