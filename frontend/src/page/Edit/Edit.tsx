import { useParams } from "react-router";
import { Form } from "../../components/Form/Form";
import { GoHomeButton } from "../../ui/GoHomeButton/GoHomeButton";
import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { fetchProductById } from "../../service/productService";

export function Edit() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchProductById(+params.id)
        .then((response) => setProduct(response.data))
        .catch(() => setProduct(null));
    }
  }, [params.id]);

  return (
    <section>
      <GoHomeButton />
      {product ? (
        <div>
          <p>Edite o produto:</p>
          <Form
            product={{
              id: product.id,
              category: product.category,
              name: product.name,
              price: product.price,
              stock: product.stock,
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
