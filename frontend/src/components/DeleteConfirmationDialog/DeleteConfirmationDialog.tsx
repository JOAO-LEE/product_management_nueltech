import { useContext, type RefObject } from "react";
import type { Product } from "../../types/Product";
import { deleteProduct } from "../../service/productService";
import "./DeleteConfirmationDialog.css";
import { ToastContext } from "../../context/ToastContext";
import { useNavigate } from "react-router";
export function DeleteConfirmationDialog({
  dialogRef,
  product,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  product: Product | null;
}) {
  const { createToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const confirmDelete = async () => {
    const confirmation = await deleteProduct(product!.id);
    if (confirmation) {
      dialogRef.current?.close();
      createToast({
        type: confirmation.success && "success",
        message: confirmation.message,
      });
      navigate("/");
    }
  };
  return (
    <dialog ref={dialogRef} className="delete-dialog">
      Você confirma que deseja deletar o produto abaixo?
      <div className="product-info">
        <p>{product?.name}</p>
        <p>R$ {product?.price}</p>
      </div>
      <div className="dialog-actions">
        <button className="dialog-buttons" onClick={() => confirmDelete()}>
          Sim
        </button>
        <button
          className="dialog-buttons"
          onClick={() => dialogRef.current?.close()}
        >
          Não
        </button>
      </div>
    </dialog>
  );
}
