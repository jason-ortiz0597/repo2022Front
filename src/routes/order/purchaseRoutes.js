import { Router } from "express";

import {createPurchase, getPurchase,deletePurchase} from "../../controllers/order/purchaseController.js";


const router = Router();

router.post("/create", createPurchase);
router.get("/get", getPurchase);
router.delete("/delete/:id", deletePurchase);

export default router;