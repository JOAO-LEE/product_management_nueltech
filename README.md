# 🛍️ Product Management Nuel Tech

Aplicação fullstack feita com React (TypeScript) e Express.js (Node.js e TypeScript). Simula o gerenciamento de produtos com funcionalidades de criação, listagem, edição e exclusão.

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/JOAO-LEE/product_management_nueltech.git
cd product_management_nueltech
```

<details>
<summary>Backend</summary>

### 2. Instale as dependências

```bash
npm install
```

### 3. 🐋 Executando com Docker

Com o docker-compose:

1. Crie um arquivo .env dentro da pasta backend com o conteúdo:

```env
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_DATABASE=store
MYSQL_USER=appuser
MYSQL_PASSWORD=apppassword
DATABASE_URL="mysql://appuser:apppassword@localhost:3306/store"
PORT=8080
```

2. Rode o docker-compose:

```bash
docker-compose up -d
```

Isso iniciará um container MySQL com as credenciais fornecidas.

Com o Dockerfile:

### 4.1. Crie um Dockerfile com o seguinte conteúdo:

```Dockerfile

FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=store
ENV MYSQL_USER=appuser
ENV MYSQL_PASSWORD=apppassword

EXPOSE 3306
VOLUME ["/var/lib/mysql"]

CMD ["mysqld"]

```

### 5. Rode os seguintes comandos:

```bash
docker build -t mysql-custom .
docker run -d -p 3306:3306 --name mysql-db mysql-custom
```

### 6. 🛠️ Configuração do Banco

Na pasta backend, execute:

```bash
npx prisma migrate dev
npx prisma db seed
```

### 7. Rode a aplicação

```bash
npm run dev
```

</details>
<hr>
<details>
<summary>Frontend</summary>

### 1. Navegue até a pasta

```bash
cd ../
cd frontend/
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie um arquivo .env.local

Insira o seguinte conteúdo:

```env
VITE_API_BASE_URL=http://localhost:8080
```

### 4. Rode a aplicação

```bash
npm run dev
```

</details>
