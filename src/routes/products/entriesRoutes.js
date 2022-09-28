import { Router } from "express";

import {createEntries, getEntries, deleteEntries} from "../../controllers/products/entriesController.js";

const router = Router();

router.post('/create', createEntries);
router.get("/list", getEntries);
router.delete("/delete/:id", deleteEntries);

export default router;