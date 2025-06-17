import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be greater than zero"),
  category: z.string().min(1, "Category is required"),
  stock: z.number().int().nonnegative("Stock must be a non-negative integer"),
});

export const updateProductSchema = createProductSchema.partial().extend({
  id: z.number().int().positive("ID must be a positive integer"),
});