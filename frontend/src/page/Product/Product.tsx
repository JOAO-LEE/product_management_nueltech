import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useParams } from "react-router";
import type { Product } from "../../interface/product";
import { fetchProductById } from "../../service/productService";
import Button from "../../ui/Button/Button";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { DeleteConfirmationDialog } from "../../components/DeleteConfirmationDialog/DeleteConfirmationDialog";
// import { InputField, InputRoot } from "../../ui/Input/Input";
// import { productSchema } from "../../schema/product.schema";

export function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const params = useParams();

  // useEffect(() => {
  //   if (dialogRef.current) {
  //     dialogRef.current.showModal();
  //   }
  // }, [showDeletionDialog]);

  useEffect(() => {
    if (params.id) {
      fetchProductById(+params.id)
        .then((response) => setProduct(response.data))
        .catch(() => setProduct(null));
    }
  }, [params.id]);

  // const handleEditClick = () => {
  //   if (product) {
  //     setEditableProduct({ ...product });
  //   }
  // };

  return (
    <>
      <section>
        <ul>
          <li>{product?.id}</li>
          <li>{product?.name}</li>
          <li>{product?.description ?? "—"}</li>
          <li>R$ {product?.price.toFixed(2)}</li>
          <li>{product?.category}</li>
          <li>{product?.stock}</li>
        </ul>
        <div>
          {/* <Button onClick={handleEditClick}>
          <i className="ph ph-pencil-simple"></i>
          Editar
        </Button> */}
          <Button
            onClick={() => {
              dialogRef.current?.showModal();
            }}
          >
            <i className="ph ph-trash-simple"></i>
            Deletar
          </Button>
        </div>
        <ProductForm />
      </section>
      <DeleteConfirmationDialog dialogRef={dialogRef} product={product} />
    </>
  );
}
