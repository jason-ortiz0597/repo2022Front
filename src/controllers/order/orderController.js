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

export const createOrder = async (req, res) => {
    try {
        const { products,price} = req.body;
      //  const response = await ProductModel.find({ _id: products });
       console.log(products); 
       console.log(price);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




