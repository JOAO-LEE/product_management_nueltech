import type { CreateProduct, Product } from "../types/Product";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchAllProducts(): Promise<{
  success: boolean;
  data: Product[];
}> {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();
  return result;
}

export async function fetchProductById(productId: number): Promise<{
  success: boolean;
  data: Product;
}> {
  const response = await fetch(`${API_BASE_URL}/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();
  return result;
}

export async function createProduct(product: CreateProduct): Promise<{
  success: boolean;
  data: Product;
}> {
  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create a product");
  }

  const result = await response.json();
  return result;
}
