import { Router } from "express";

import {  getProductBySubCategory,createOrder,getOrders, deleteOrder  } from "../../controllers/order/orderController.js";

const router = Router();

router.post("/createOrder", createOrder);

//router.get("/getProductByCategory/:category", getProductByCategory);

router.get("/getProductBySubCategory/:subCategory", getProductBySubCategory);

router.get("/getOrders", getOrders);

router.delete("/deleteOrder/:id", deleteOrder);


export default router;