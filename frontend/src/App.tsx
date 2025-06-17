import "./App.css";
import { ProductTable } from "./components/ProductTable";
import { Route, Routes } from "react-router";

function App() {
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
