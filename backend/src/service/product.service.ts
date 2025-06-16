import { PrismaClient, Product } from "../../generated/prisma/client";
const prisma = new PrismaClient();

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id: number) => {
  return await prisma.product.findFirst({ where: { id } });
};

const createProduct = async (product: Product) => {
  const createdProduct = await prisma.product.create({ data: product });
  return createdProduct;
};

export { getAllProducts, getProductById, createProduct };
