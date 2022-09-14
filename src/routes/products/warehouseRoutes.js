import { Router } from "express";

import {createWarehouse, getWarehouse,
    deleteWarehouse, getWarehouseActive,
     updateWarehouse, changeStatusWarehouse} from "../../controllers/products/warehouseController.js";


const router = Router();

router.get("/list", getWarehouse);
router.post("/create", createWarehouse);

router.delete("/delete/:id", deleteWarehouse);
router.get("/listActive", getWarehouseActive);

router.put("/update/:id", updateWarehouse);
router.put("/changeStatus/:id", changeStatusWarehouse);

export default router;

