import express, { type Response } from "express";
import { getAllProducts } from "./service/product.service";

const app = express();
app.use(express.json());

app.get("/", async (_req, resp: Response) => {
  const products = await getAllProducts();
  resp.status(200).json({ ...products });
});

export default app;
