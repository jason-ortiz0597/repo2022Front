import { json } from "express";
import ProductModel from "../../models/products/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().populate('provaider').populate('warehouse').populate('typeProduct');
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = new ProductModel(product);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//update product
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 