import TypeProduct from "../../models/products/typeProductModel.js";


export const createTypeProduct = async (req, res) => {
    const { name, status } = req.body;
    try {
        const newTypeProduct = new TypeProduct({ name, status });
        const typeProductSaved = await newTypeProduct.save();
        res.status(201).json(typeProductSaved);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getTypeProducts = async (req, res) => {
    const typeProducts = await TypeProduct.find();
    try {
        res.status(200).json(typeProducts);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateTypeProduct = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    try {
        const typeProduct = await TypeProduct.findById(id);
        if (name) {
            typeProduct.name = name;
        }
        if (status) {
            typeProduct.status = status;
        }
        const updatedTypeProduct = await TypeProduct.findByIdAndUpdate(id, typeProduct, { new: true });
        res.status(200).json(updatedTypeProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteTypeProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await TypeProduct.findByIdAndDelete(id);
        res.status(200).json("Type Product has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getTypeProductActive = async (req, res) => {
    const typeProducts = await TypeProduct.find({ status: "active" });
    try {
        res.status(200).json(typeProducts);
    } catch (error) {
        res.status(500).json(error);
    }
}


