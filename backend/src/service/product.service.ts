import { PrismaClient } from "../../generated/prisma/client";
const prisma = new PrismaClient();

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id: number) => {
  return await prisma.product.findFirst({ where: { id } });
};

export { getAllProducts, getProductById };
