import { z } from "zod";

export const productSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1, "Nome do produto é obrigatório"),
  description: z.string().optional(),
  price: z
    .number({ coerce: true, invalid_type_error: "Preço deve ser um número" })
    .positive("Preço não pode ser negativo"),
  category: z.string().optional(),
  stock: z
    .number({ coerce: true, invalid_type_error: "Estoque deve ser um número" })
    .int()
    .nonnegative("Estoque deve ser um inteiro positivo"),
});

export const createProductSchema = productSchema.omit({ id: true });

export const updateProductSchema = productSchema.partial().extend({
  id: z.number().int(),
});
