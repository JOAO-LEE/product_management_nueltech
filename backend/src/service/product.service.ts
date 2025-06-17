import { CreateProductInput, UpdateProductInput } from "../types/products.type";
import prisma from "../client/prisma";

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

const createProduct = async (productInput: CreateProductInput) => {
  const product = await prisma.product.create({ data: productInput });
  return product;
};

const updateProduct = async (productInput: UpdateProductInput) => {
  const product = await prisma.product.update({
    where: { id: productInput.id },
    data: productInput,
  });
  return product;
};

const deleteProduct = async (id: number) => {
  const product = await prisma.product.delete({ where: { id } });
  return product;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
