import { Router } from "express";
import { create, getAll, getById } from "../controllers/product.controller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);

export default router;
