import { getProductById } from "../service/product.service";
import { type Request, type Response } from "express";

const getAll = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.status(200).json({ product });
};

const getById = async (req: Request, resp: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  if (!product) return resp.status(404).json({ message: "Product not found" });
  return resp.status(200).json({ product });
};

export { getAll, getById };
