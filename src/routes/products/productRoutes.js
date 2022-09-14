import { Router } from "express";

import {createProduct, getProducts,updateProduct} from "../../controllers/products/productController.js";

const router = Router();

router.post("/create", createProduct);
router.get("/list", getProducts);
router.put("/update/:id", updateProduct);


export default router;