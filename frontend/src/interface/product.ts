import type { z } from "zod";
import type { productSchema } from "../schema/product.schema";

export type Product = z.infer<typeof productSchema>;
