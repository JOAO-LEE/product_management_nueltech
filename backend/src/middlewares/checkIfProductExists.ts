import { type Request, type Response, type NextFunction } from "express";
import { getProductById } from "../service/product.service";

const checkIfProductExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const product = await getProductById(+id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    (req as any).product = product;
    next();
  } catch (error) {
    console.error("Product related error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export default checkIfProductExists;
