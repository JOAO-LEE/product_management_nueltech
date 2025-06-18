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
        name: "Camiseta Star Wars - Darth Vader",
        description: "Camiseta preta com estampa do Lord Sith",
        price: 89.9,
        category: "Roupas",
        stock: 30,
      },
      {
        name: "Funko Pop! Homem de Ferro",
        description: "Colecionável do Tony Stark em armadura Mk-50",
        price: 129.9,
        category: "Colecionáveis",
        stock: 15,
      },
      {
        name: "Teclado Mecânico RGB Redragon Kumara",
        description: "Teclado gamer com switches Outemu Blue",
        price: 249.9,
        category: "Periféricos",
        stock: 20,
      },
      {
        name: "Mouse Gamer Logitech G502 HERO",
        description: "Sensor HERO 25K e 11 botões programáveis",
        price: 349.9,
        category: "Periféricos",
        stock: 12,
      },
      {
        name: "HQ Batman: A Piada Mortal",
        description: "Obra clássica de Alan Moore e Brian Bolland",
        price: 59.9,
        category: "Livros",
        stock: 25,
      },
      {
        name: "Caneca Game of Thrones - Casa Stark",
        description: "Caneca com brasão dos Stark - Winter is Coming",
        price: 49.9,
        category: "Utilidades",
        stock: 40,
      },
      {
        name: "Headset Razer Kraken X",
        description: "Áudio imersivo 7.1 com microfone flexível",
        price: 299.9,
        category: "Periféricos",
        stock: 18,
      },
      {
        name: "Controle Xbox Series X Wireless",
        description: "Controle sem fio com ergonomia refinada",
        price: 429.9,
        category: "Acessórios",
        stock: 14,
      },
      {
        name: "Luminária Pokébola LED",
        description: "Luminária decorativa para fãs de Pokémon",
        price: 99.9,
        category: "Decoração",
        stock: 22,
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
