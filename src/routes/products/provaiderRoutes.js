import { Router } from "express";

import {createProvaider, deleteProvaider, getProvaider, 
    getProvaiderActive, updateProvaider,updateStatusProvaider } from "../../controllers/products/provaiderController.js";

const router = Router();

router.get("/list", getProvaider);
router.get("/listActive", getProvaiderActive);
router.post("/create", createProvaider);
router.delete("/delete/:id", deleteProvaider);
router.put("/update/:id", updateProvaider);
router.put("/updateStatus/:id", updateStatusProvaider);

export default router;

