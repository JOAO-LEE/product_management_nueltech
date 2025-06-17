import { Product } from "../../generated/prisma";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../service/product.service";
import { type Request, type Response } from "express";

const getAllController = async (_req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(200).json({ success: true, data: products });
};

const getByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  if (!product)
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  return res.status(200).json({ success: true, data: product });
};

const createCrontroller = async (req: Request, res: Response) => {
  const product = req.body;
  await createProduct(product);
  return res.status(201).json({ success: true, data: product });
};

const updateController = async (req: Request, res: Response) => {
  const productToUpdate = req.body;
  const product = await updateProduct(productToUpdate);
  return res.status(200).json({ success: true, data: product });
};

const deleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProduct(+id);
  return res.status(204).json();
};

export {
  getAllController,
  getByIdController,
  createCrontroller,
  updateController,
  deleteController,
};
