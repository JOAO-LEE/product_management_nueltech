import { Router } from "express";
import {
  createCrontroller,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from "../controllers/product.controller";
import checkIfProductExists from "../middlewares/checkIfProductExists";

const router = Router();

router.get("/", getAllController);
router.get("/:id", getByIdController);
router.post("/", createCrontroller);
router.put("/:id", checkIfProductExists, updateController);
router.delete("/:id", checkIfProductExists, deleteController);

export default router;
