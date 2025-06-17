import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
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

const create = async (req: Request, res: Response) => {
  const product = req.body;
  await createProduct(product);
  return res.status(201).json({ product });
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productToUpdate = req.body;
  const product = await getProductById(+id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  const updatedProduct = await updateProduct(productToUpdate);
  return res.status(200).json({ updatedProduct });
};

export { getAll, getById, create, update };
