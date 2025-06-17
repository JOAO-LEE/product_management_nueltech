import { PrismaClient } from "../../generated/prisma/client";
import { CreateProductInput, UpdateProductInput } from "../types/products";
const prisma = new PrismaClient();

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id: number) => {
  return await prisma.product.findFirst({ where: { id } });
};

const createProduct = async (product: CreateProductInput) => {
  const createdProduct = await prisma.product.create({ data: product });
  return createdProduct;
};

const updateProduct = async (product: UpdateProductInput) => {
  const createdProduct = await prisma.product.update({
    where: { id: product.id },
    data: product,
  });
  return createdProduct;
};

const deleteProduct = async (id: number) => {
  const deletedProduct = await prisma.product.delete({ where: { id } });
  return deletedProduct;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
