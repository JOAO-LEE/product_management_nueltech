import { z } from "zod";

export const productSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be greater than zero"),
  category: z.string().min(1, "Category is required"),
  stock: z.number().int().nonnegative("Stock must be a non-negative integer"),
});

export const createProductSchema = productSchema.omit({ id: true });

export const updateProductSchema = productSchema.partial().extend({
  id: z.number().int(),
});
