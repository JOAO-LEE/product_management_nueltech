import type { RefObject } from "react";
import type { Product } from "../../interface/product";

export function DeleteConfirmationDialog({
  dialogRef,
  product,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  product: Product | null;
}) {
  return (
    <dialog
      ref={dialogRef}
      style={{
        color: "white",
        backgroundColor: "black",
        width: "50%",
        height: "25%",
        backdropFilter: "blur(1rem)",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      Você confirma que deseja confirmar o produto abaixo?
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <button>Sim</button>
      <button onClick={() => dialogRef.current?.close()}>Não</button>
    </dialog>
  );
}
