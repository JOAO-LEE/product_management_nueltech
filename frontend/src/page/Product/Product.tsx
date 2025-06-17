import { useEffect, useState, type ChangeEvent } from "react";
import { useParams } from "react-router";
import type { Product } from "../../interface/product";
import { fetchProductById } from "../../service/productService";
import Button from "../../ui/Button/Button";
import { InputField, InputRoot } from "../../ui/Input/Input";

export function Product() {
  const [product, setProduct] = useState<Product>();
  const [editableProduct, setEditableProduct] = useState<Product>();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchProductById(+params.id)
        .then((response) => setProduct(response.data))
        .catch(() => setProduct(undefined));
    }
  }, [params.id]);

  const handleEditClick = () => {
    if (product) {
      setEditableProduct({ ...product });
    }
  };

  const handleEditFields = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const fieldName = e.target.name as keyof Product;
    const parsedValue =
      fieldName === "price" || fieldName === "stock" ? Number(value) : value;
    setEditableProduct((prev) =>
      prev ? { ...prev, [fieldName]: parsedValue } : prev
    );
  };

  return (
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
        <Button onClick={handleEditClick}>
          <i className="ph ph-pencil-simple"></i>
          Editar
        </Button>
        <Button>
          <i className="ph ph-trash-simple"></i>
          Deletar
        </Button>
      </div>
      <form>
        <InputRoot>
          <InputField
            name="name"
            onChange={(e) => handleEditFields(e)}
            value={editableProduct?.name}
          />
        </InputRoot>
        <InputRoot>
          <InputField
            name="description"
            onChange={(e) => handleEditFields(e)}
            value={editableProduct?.description ?? ""}
          />
        </InputRoot>
        <InputRoot>
          <InputField
            name="category"
            onChange={(e) => handleEditFields(e)}
            value={editableProduct?.category}
          />
        </InputRoot>
        <InputRoot>
          <InputField
            name="stock"
            onChange={(e) => handleEditFields(e)}
            value={editableProduct?.stock.toString()}
          />
        </InputRoot>
        <InputRoot>
          <InputField
            name="price"
            onChange={(e) => handleEditFields(e)}
            value={editableProduct?.price.toFixed(2)}
          />
        </InputRoot>
      </form>
    </section>
  );
}
