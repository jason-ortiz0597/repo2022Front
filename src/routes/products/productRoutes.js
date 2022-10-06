import { Router } from "express";
import fileUpload from 'express-fileupload';

import {createProduct, getProducts,updateProduct,
    deleteProduct,getProductbyWarehouse} from "../../controllers/products/productController.js";

const router = Router();

router.post('/create', fileUpload({ useTempFiles: true, tempFileDir: './tmp'}), createProduct);
router.get("/list", getProducts);
router.put("/update/:id", fileUpload({ useTempFiles: true, tempFileDir: './tmp'}), updateProduct);
router.delete("/delete/:id", deleteProduct);

router.get("/listbywarehouse/:id", getProductbyWarehouse);



export default router; 