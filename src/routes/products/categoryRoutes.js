import { Router } from "express"

import { createCategory,createSubcategory,getCategories,getSubcategory, deleteCategory, deleteSubcategory, updateCategory, updateSubcategory} 
from "../../controllers/products/categoryController.js"

const router = Router()

router.get("/listCategory", getCategories)
router.get("/listSubcategory", getSubcategory)
router.post("/createCategory", createCategory)
router.post("/createSubcategory", createSubcategory)

router.delete("/deleteCategory/:id", deleteCategory)
router.delete("/deleteSubcategory/:id", deleteSubcategory)

router.put("/updateCategory/:id", updateCategory)
router.put("/updateSubcategory/:id", updateSubcategory)


export default router