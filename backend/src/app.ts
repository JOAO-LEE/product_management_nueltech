import express, { type Application } from "express";
import productRoutes from "./routes/product.route";
import cors from 'cors'

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json());

app.use("/", productRoutes);

export default app;
