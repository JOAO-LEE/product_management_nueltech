import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../../types/Product";
import { fetchProductById } from "../../service/productService";
import Button from "../../ui/Button/Button";
import { DeleteConfirmationDialog } from "../../components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { GoHomeButton } from "../../ui/GoHomeButton/GoHomeButton";
import "./Product.css";

export function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchProductById(+params.id)
        .then((response) => setProduct(response.data))
        .catch(() => setProduct(null));
    }
  }, [params.id]);

  return (
    <>
      <section className="product-container">
        <GoHomeButton />
        <div className="product-details">
          <ul>
            <li>ID: {product?.id}</li>
            <li>Nome: {product?.name}</li>
            <li>Descrição: {product?.description ?? "—"}</li>
            <li>Preço: R$ {product?.price.toFixed(2)}</li>
            <li>Categoria: {product?.category}</li>
            <li>Estoque: {product?.stock}</li>
          </ul>
        </div>
        <div>
          <Button
            onClick={() => {
              dialogRef.current?.showModal();
            }}
          >
            <i className="ph ph-trash-simple"></i>
            Deletar
          </Button>
        </div>
      </section>
      <DeleteConfirmationDialog dialogRef={dialogRef} product={product} />
    </>
  );
}
