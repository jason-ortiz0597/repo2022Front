import { Router } from "express";

import {  getProductBySubCategory,createOrder  } from "../../controllers/order/orderController.js";

const router = Router();

router.post("/createOrder", createOrder);

//router.get("/getProductByCategory/:category", getProductByCategory);

router.get("/getProductBySubCategory/:subCategory", getProductBySubCategory);


export default router;