import { useState, useEffect } from "react";
import type { Product } from "../interface/product";
import { fetchAllProducts } from "../service/productService";

export function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description ?? "—"}</td>
            <td>R$ {product.price.toFixed(2)}</td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
