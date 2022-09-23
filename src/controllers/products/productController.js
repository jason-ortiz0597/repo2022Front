
import ProductModel from "../../models/products/ProductModel.js";

import {deleteImage,updateImage,uploadImage } from "../../database/cloudinary.js";
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().populate('warehouse','name').populate('typeProduct','name').populate('provaider','legalReason');
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//create product with image in cloudinary

export const createProduct = async (req, res) => {
    try {
        const { name, provaider, typeProduct, warehouse, hallway, shelf, stock, dateOfExpiration, price, dayMargin, status } = req.body;
        const product = new ProductModel({ name, provaider, typeProduct, warehouse, hallway, shelf, stock, dateOfExpiration, price, dayMargin, status });
        if (req.files?.image) {
            const image = await uploadImage(req.files.image.tempFilePath);
            product.image = {
                public_id: image.public_id,
                secure_url: image.secure_url
            }
            fs.unlinkSync(req.files.image.tempFilePath);
        }
        await product.save();
        res.json({ message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update product with imagen cloudinary
export const updateProduct = async (req, res) => {
    try {
        const { name, provaider, typeProduct, warehouse, hallway, shelf, stock, dateOfExpiration, price, dayMargin, status } = req.body;
        const product = await ProductModel.findById(req.params.id);
        if (product) {
            product.name = name;
            product.provaider = provaider;
            product.typeProduct = typeProduct;
            product.warehouse = warehouse;
            product.hallway = hallway;
            product.shelf = shelf;
            product.stock = stock;
            product.dateOfExpiration = dateOfExpiration;
            product.price = price;
            product.dayMargin = dayMargin;
            product.status = status;
            if (req.files?.image) {
                if (product.image.public_id) {
                    await deleteImage(product.image.public_id);
                }
                const image = await uploadImage(req.files.image.tempFilePath);
                product.image = {
                    public_id: image.public_id,
                    secure_url: image.secure_url
                }
                fs.unlinkSync(req.files.image.tempFilePath);
            }
            await product.save();
            res.json({ message: "Product updated successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete product 
export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.image.public_id) {
            await deleteImage(product.image.public_id);
           
           
        }
       

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}







 