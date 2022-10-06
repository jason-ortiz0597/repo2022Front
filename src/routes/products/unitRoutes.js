import { Router } from "express";

import {createUnit,getUnits, deleteUnit,createMensure,deleteMensure,
    getMensures,updateMensure,updateUnit,getMensurebyUnit} from "../../controllers/products/unitController.js";

const router = Router();

router.post("/createUnit", createUnit);
router.get("/listUnit", getUnits);
router.delete("/deleteUnit/:id", deleteUnit);
router.put("/updateUnit/:id", updateUnit);

router.post("/createMensure", createMensure);
router.get("/listMensure", getMensures);
router.delete("/deleteMensure/:id", deleteMensure);
router.put("/updateMensure/:id", updateMensure);
router.get("/listMensurebyUnit/:id", getMensurebyUnit);



export default router;
