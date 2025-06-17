import type { Product } from "../interface/product";
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
