import { Router } from "express";

import {createEntries, getEntries, deleteEntries,
    getTypeEntries,createTypeEntries} from "../../controllers/products/entriesController.js";

const router = Router();

router.post('/create', createEntries);
router.get("/list", getEntries);
router.delete("/delete/:id", deleteEntries);

router.get("/type", getTypeEntries);
router.post("/type/create", createTypeEntries);


export default router;