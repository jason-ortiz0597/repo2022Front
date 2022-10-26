import orderModel from "../../models/order/orderModel.js";
import ProductModel from "../../models/products/ProductModel.js"    

//getProductBySubCategory

export const getProductBySubCategory = async (req, res) => {
    try {
        const { subCategory } = req.params;
        const products = await ProductModel.find({ subCategory: subCategory });
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//createOrder

export const createOrder = async (req, res) => {
    try {
        const { order } = req.body;
        const newOrder = new orderModel({ order });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await orderModel.findByIdAndDelete(id);
        res.status(200).json(deletedOrder);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




