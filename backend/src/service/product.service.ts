import { PrismaClient } from "../../generated/prisma/client";
const prisma = new PrismaClient();

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return {
    data: products,
  };
};

export { getAllProducts };
