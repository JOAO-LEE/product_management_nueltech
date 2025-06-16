// prisma/seed.ts
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Notebook Dell XPS 13",
        description: "Ultrafino com tela infinita",
        price: 8999.99,
        category: "Eletrônicos",
        stock: 10,
      },
      {
        name: "Camiseta Básica",
        description: "Camiseta 100% algodão",
        price: 49.9,
        category: "Moda",
        stock: 100,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed executado com sucesso");
  })
  .catch((e) => {
    console.error("Erro ao rodar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
