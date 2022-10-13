import { Router } from "express";

import { createExits,getExits,createTypeExit,getTypeExit, deleteExits } from "../../controllers/products/exitsController.js";

const router = Router();

router.post("/createExits", createExits);

router.get("/getExits", getExits);

router.post("/createTypeExit", createTypeExit);

router.get("/getTypeExit", getTypeExit);

router.delete("/deleteExits/:id", deleteExits);




export default router;