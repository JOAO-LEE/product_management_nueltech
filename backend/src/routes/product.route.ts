import { Router } from "express";
import {
  createCrontroller,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAllController);
router.get("/:id", getByIdController);
router.post("/", createCrontroller);
router.put("/:id", updateController);
router.delete("/:id", deleteController);

export default router;
