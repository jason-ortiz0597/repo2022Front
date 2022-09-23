import { Router } from "express";

import {
  createTypeProvaider,
  getTypeProvaider,
  deleteTypeProvaider,
  getTypeProvaiderActive,
  updateStatusTypeProvaider,
  updateTypeProvaider,
} from "../../controllers/products/tyProvaiderController.js";

const router = Router();

router.get("/list", getTypeProvaider);
router.post("/create", createTypeProvaider);

router.delete("/delete/:id", deleteTypeProvaider);
router.get("/listActive", getTypeProvaiderActive);

router.put("/updateStatus/:id", updateStatusTypeProvaider);
router.put("/update/:id", updateTypeProvaider);


export default router;
