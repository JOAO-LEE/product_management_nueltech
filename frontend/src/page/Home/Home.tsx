import { useState, useEffect } from "react";
import { ProductTable } from "../../components/ProductsTable/ProductsTable";
import type { Product } from "../../types/Product";
import { fetchAllProducts } from "../../service/productService";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router";
import "./Home.css";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="home-container">
      <div>
        <h1>Lista de produtos</h1>
        <Button onClick={() => navigate("/create")}>
          Criar novo produto <i className="ph ph-plus"></i>
        </Button>
      </div>
      <ProductTable products={products} />
    </section>
  );
}
