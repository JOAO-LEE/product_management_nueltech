import { Product } from "../../generated/prisma";

type CreateProductInput = Omit<Product, "id" | "createdAt" | "updatedAt">;
type UpdateProductInput = Partial<CreateProductInput> & { id: number };

export type { CreateProductInput, UpdateProductInput };
