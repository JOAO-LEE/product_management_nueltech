import type { z } from "zod";
import type {
  productSchema,
  createProductSchema,
  updateProductSchema,
} from "../schema/product.schema";

type Product = z.infer<typeof productSchema>;
type CreateProduct = z.infer<typeof createProductSchema>;
type UpdateProduct = z.infer<typeof updateProductSchema>;

export type { Product, CreateProduct, UpdateProduct };
