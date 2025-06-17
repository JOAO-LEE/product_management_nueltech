import { z } from "zod";
import {
  createProductSchema,
  updateProductSchema,
} from "../utils/product.schema";

type CreateProductInput = z.infer<typeof createProductSchema>;
type UpdateProductInput = z.infer<typeof updateProductSchema>;

export type { CreateProductInput, UpdateProductInput };
