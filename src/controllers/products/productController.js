
import ProductModel from "../../models/products/ProductModel.js";
import warehouseModel from "../../models/products/warehouseModel.js";
import {deleteImage,updateImage,uploadImage } from "../../database/cloudinary.js";
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().populate({path:'subCategory',select:'name'}).populate({path:'category',select:'name'}).populate({path:'typeProduct',select:'name'})
        .populate({path:'warehouse',select:'name'}).populate({path:'provaider',select:'legalReason'}).populate({path:'unit',select:'name'});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getProductbyWarehouse = async (req, res) => {
    try {
        const products = await ProductModel.find({warehouse:req.params.id}).populate({path:'warehouse',select:'name'});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, provaider, typeProduct, warehouse,category,subCategory, unit  ,hallway, shelf, minStock, maxStock, dateOfExpiration, price, dayMargin, status } = req.body;
        const product = new ProductModel({ name, provaider, typeProduct, warehouse,category,subCategory, unit, hallway, shelf, minStock,maxStock, dateOfExpiration, price, dayMargin, status });
        if (req.files?.image  ) {
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




export const updateProduct = async (req, res) => {
    try {
        const { name, provaider, typeProduct, warehouse, category, subCategory,unit, hallway, shelf,minStock, maxStock, dateOfExpiration, price, dayMargin, status } = req.body;
        const product = await ProductModel.findById(req.params.id);
        if (product) {
            product.name = name;
            product.provaider = provaider;
            product.typeProduct = typeProduct;
            product.warehouse = warehouse;
            product.category = category;
            product.subCategory = subCategory;
            product.unit = unit;
            product.hallway = hallway;
            product.shelf = shelf;
            product.minStock = minStock;
            product.maxStock = maxStock;
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







 