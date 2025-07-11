import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./page/Home/Home";
import { Product } from "./page/Product/Product";
import { Create } from "./page/Create/Create";
import { Toast } from "./ui/Toast/Toast";
import { useContext } from "react";
import { ToastContext } from "./context/ToastContext";
import { Edit } from "./page/Edit/Edit";

function App() {
  const { toastIsOpen } = useContext(ToastContext);
  return (
    <main id="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {toastIsOpen ? <Toast /> : <></>}
    </main>
  );
}

export default App;
