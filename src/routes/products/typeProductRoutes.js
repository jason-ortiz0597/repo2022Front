import { Router } from "express";

import {createTypeProduct, getTypeProducts, deleteTypeProduct, getTypeProductActive, updateTypeProduct } from "../../controllers/products/typeProductController.js";


const router = Router();

router.get("/list", getTypeProducts);
router.post("/create", createTypeProduct);

router.delete("/delete/:id", deleteTypeProduct);
router.get("/listActive", getTypeProductActive);
router.put("/update/:id", updateTypeProduct);

export default router;
