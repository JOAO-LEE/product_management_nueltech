import type { z } from "zod";
import type { productSchema } from "../service/productService";

export type Product = z.infer<typeof productSchema>;
