import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./page/Home/Home";
import { Product } from "./page/Product/Product";
import { Create } from "./page/Create/Create";

function App() {
  return (
    <main id="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </main>
  );
}

export default App;
