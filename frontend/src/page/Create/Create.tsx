import type { CreateProduct } from "../../types/Product";
import { InputField, InputRoot } from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createProductSchema } from "../../schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { createProduct } from "../../service/productService";
import { useNavigate } from "react-router";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage";

export function Create() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit: SubmitHandler<CreateProduct> = async (data) => {
    try {
      const parsedValue = createProductSchema.safeParse(data);
      if (!parsedValue.success) {
        throw new Error(parsedValue.error.message);
      }
      await createProduct(parsedValue.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <i className="ph ph-arrow-square-left" onClick={() => navigate("/")}></i>
      <div>
        <p>Crie um produto!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputRoot>
            <InputField
              {...register("name")}
              name="name"
              type="text"
              placeholder="Nome"
            />
          </InputRoot>
          {errors.name && <ErrorMessage message={errors.name.message} />}

          <InputRoot>
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

          <InputRoot>
            <InputField
              {...register("category")}
              name="category"
              type="text"
              placeholder="Categoria"
            />
          </InputRoot>
          {errors.category && (
            <ErrorMessage message={errors.category.message} />
          )}

          <InputRoot>
            <InputField
              {...register("stock", { valueAsNumber: true })}
              name="stock"
              type="text"
              placeholder="Estoque"
            />
          </InputRoot>
          {errors.stock && <ErrorMessage message={errors.stock.message} />}

          <InputRoot>
            <InputField
              {...register("price", { valueAsNumber: true })}
              name="price"
              type="text"
              placeholder="Preço"
            />
          </InputRoot>
          {errors.price && <ErrorMessage message={errors.price.message} />}
          <Button type="submit">Criar</Button>
        </form>
      </div>
    </section>
  );
}
