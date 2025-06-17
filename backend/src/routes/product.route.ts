import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);

export default router;
