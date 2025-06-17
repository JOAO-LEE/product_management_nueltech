import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../service/product.service";
import { type Request, type Response } from "express";

const getAll = async (_req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(200).json({ data: products });
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.status(200).json({ product });
};

export { getAll, getById };
