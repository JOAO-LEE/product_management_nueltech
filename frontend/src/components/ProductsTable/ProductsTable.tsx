import { useNavigate } from "react-router";
import type { Product } from "../../types/Product";
import "./ProductsTable.css";

export function ProductTable({ products }: { products: Product[] }) {
  const navigate = useNavigate();

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Estoque</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description ?? "—"}</td>
            <td>R$ {product.price.toFixed(2)}</td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
            <td>
              <button
                key={product.id}
                onClick={() => navigate(`/${product.id}`)}
              >
                <i className="ph ph-eye"></i>
                Ver
              </button>

              <button>
                <i className="ph ph-pencil"></i>
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
