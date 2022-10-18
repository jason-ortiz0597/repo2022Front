import { Router } from "express";

import { createExits,getExits,createTypeExit,getTypeExit, deleteExits,getInventory } from "../../controllers/products/exitsController.js";

const router = Router();

router.post("/createExits", createExits);

router.get("/getExits", getExits);

router.post("/createTypeExit", createTypeExit);

router.get("/getTypeExit", getTypeExit);


router.delete("/deleteExits/:id", deleteExits);

router.get("/getInventory", getInventory);




export default router;