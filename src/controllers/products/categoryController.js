import categoryModel from "../../models/products/categoryModel.js";
import subcategoryModel from "../../models/products/subcategoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find().populate('subCategory','name');
        if (!categories) throw Error('No categories');
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSubcategory = async (req, res) => {
    try {
        const subcategory = await subcategoryModel.find();
        if (!subcategory) throw Error('No subcategory');
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//create category
export const createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = new categoryModel(category);
    try {
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//create subcategory
export const createSubcategory = async (req, res) => {
    const newSubcategory = new subcategoryModel(req.body);
    try {
        const subcategory = await newSubcategory.save();
        if (!subcategory) throw Error('Something went wrong saving the subcategory');
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update category
export const updateCategory = async (req, res) => {
        try {
            const category = await categoryModel.findByIdAndUpdate(req.params.id, req.body);
            if (!category) throw Error('No category found');
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }   
}

//update subcategory
export const updateSubcategory = async (req, res) => {
    try {
        const subcategory = await subcategoryModel.findByIdAndUpdate(req.params.id, req.body);
        if (!subcategory) throw Error('No subcategory found');
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
}


//delete category
export const deleteCategory = async (req, res) => {
    try {
        const category = await categoryModel.findByIdAndDelete(req.params.id);
        if (!category) throw Error('No category found');
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete subcategory
export const deleteSubcategory = async (req, res) => {
    try {
        const subcategory = await subcategoryModel.findByIdAndDelete(req.params.id);
        if (!subcategory) throw Error('No subcategory found');
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


