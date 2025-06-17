import { useState, useEffect } from "react";
import { ProductTable } from "../../components/ProductTable";
import type { Product } from "../../interface/product";
import { fetchAllProducts } from "../../service/productService";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section>
      <ProductTable products={products} />
    </section>
  );
}
