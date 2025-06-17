import "./App.css";
import { ProductTable } from "./components/ProductTable";
import { Route, Routes } from "react-router";
import { InputField, InputRoot } from "./ui/Input/Input";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "./service/productService";
import type { Product } from "./interface/product";

function App() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    fetchAllProducts()
      .then(setProducts)
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <main id="page-content">
      <Routes>
        <Route path="/" element={<ProductTable products={products} />} />
        <Route path="/:id" element={<h1>teste2</h1>} />
      </Routes>
    </main>
  );
}

export default App;
