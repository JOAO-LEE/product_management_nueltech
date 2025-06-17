import { Router } from "express";
import {
  createCrontroller,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from "../controllers/product.controller";
import checkIfProductExists from "../middlewares/checkIfProductExists";
import {
  createProductSchema,
  updateProductSchema,
} from "../utils/product.schema";
import validate from "../middlewares/schemaValidator";

const router = Router();

router.get("/", getAllController);
router.get("/:id", getByIdController);
router.post("/", validate(createProductSchema), createCrontroller);
router.put(
  "/:id",
  validate(updateProductSchema),
  checkIfProductExists,
  updateController
);
router.delete("/:id", checkIfProductExists, deleteController);

export default router;
