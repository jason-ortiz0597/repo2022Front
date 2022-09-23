import { Router } from "express";
import fileUpload from 'express-fileupload';

import {createProduct, getProducts,updateProduct,deleteProduct} from "../../controllers/products/productController.js";

const router = Router();

router.post('/create', fileUpload({ useTempFiles: true, tempFileDir: './tmp'}), createProduct);
router.get("/list", getProducts);
router.put("/update/:id", fileUpload({ useTempFiles: true, tempFileDir: './tmp'}), updateProduct);
router.delete("/delete/:id", deleteProduct);


export default router; 