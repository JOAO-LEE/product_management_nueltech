import { useContext } from "react";
import type { CreateProduct, Product } from "../../types/Product";
import { InputRoot, InputField } from "../../ui/Input/Input";
import { createProduct, updateProduct } from "../../service/productService";
import {
  createProductSchema,
  updateProductSchema,
} from "../../schema/product.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage";
import Button from "../../ui/Button/Button";
import { ToastContext } from "../../context/ToastContext";
import "./Form.css";

export function Form({ product }: { product?: Product }) {
  const {
    register,
    handleSubmit,
    formState: { errors,  },
  } = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
    defaultValues: product
      ? {
          category: product.category,
          description: product.description,
          name: product.name,
          price: product.price,
          stock: product.stock,
        }
      : undefined,
  });

  const { createToast } = useContext(ToastContext);

  const onSubmit: SubmitHandler<CreateProduct> = async (data) => {
    if (product) {
      const parsedValue = updateProductSchema.safeParse({
        ...data,
        id: product.id,
      });
      if (parsedValue.success) {
        await updateProduct(parsedValue.data);
        createToast({
          message: "Produto atualizado com sucesso!",
          type: "success",
        });
      }
    } else {
      const parsedValue = createProductSchema.safeParse(data);
      if (parsedValue.success) {
        await createProduct(parsedValue.data);
        createToast({
          message: "Produto criado no banco de dados!",
          type: "success",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="product-form">
      <InputRoot error={errors.name}>
        <InputField
          {...register("name")}
          name="name"
          type="text"
          placeholder="Nome"
        />
      </InputRoot>
      {errors.name && <ErrorMessage message={errors.name.message} />}

      <InputRoot error={errors?.description}>
        <InputField
          {...register("description")}
          name="description"
          type="text"
          placeholder="Descrição"
        />
      </InputRoot>
      {errors.category && (
        <ErrorMessage message={errors.description?.message} />
      )}

      <InputRoot error={errors?.category}>
        <InputField
          {...register("category")}
          name="category"
          type="text"
          placeholder="Categoria"
        />
      </InputRoot>
      {errors.category && <ErrorMessage message={errors.category.message} />}

      <InputRoot error={errors?.stock}>
        <InputField
          {...register("stock", { valueAsNumber: true })}
          name="stock"
          type="text"
          placeholder="Estoque"
        />
      </InputRoot>
      {errors.stock && <ErrorMessage message={errors.stock.message} />}

      <InputRoot error={errors?.price}>
        <InputField
          {...register("price", { valueAsNumber: true })}
          name="price"
          type="text"
          placeholder="Preço"
        />
      </InputRoot>
      {errors.price && <ErrorMessage message={errors.price.message} />}
      <Button type="submit">
        {product ? "Enviar alterações" : "Criar produto"}
      </Button>
    </form>
  );
}
