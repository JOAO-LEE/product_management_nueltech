# 🛍️ Product Management Nuel Tech

## Backend

### 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/JOAO-LEE/product_management_nueltech.git
cd seu-repo
```

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

1. Crie um Dockerfile com o seguinte conteúdo:

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

2. Rode os seguintes comandos:

```bash
docker build -t mysql-custom .
docker run -d -p 3306:3306 --name mysql-db mysql-custom
```

### 4. 🛠️ Configuração do Banco

Na pasta backend, execute:

```bash
npx prisma migrate dev
npx prisma db seed
```
