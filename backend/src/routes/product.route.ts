import { Router } from "express";
import {
  create,
  deleteProductController,
  getAll,
  getById,
  update,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteProductController);

export default router;
