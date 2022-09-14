import warehouseModel from "../../models/products/warehouseModel.js";

export const getWarehouse = async (req, res) => {
    try {
        const warehouse = await warehouseModel.find();
        if (!warehouse){
            return res.status(404).json({message: "No warehouse found"});
        } else {
            return res.status(200).json(warehouse);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getWarehouseActive = async (req, res) => {
    try {
        const warehouse = await warehouseModel.find({status: "active"});
        if (!warehouse){
            return res.status(404).json({message: "No warehouse found"});
        } else {
            return res.status(200).json(warehouse);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createWarehouse = async (req, res) => {
    const warehouse = req.body;
    const newWarehouse = new warehouseModel(warehouse);
    try {
        await newWarehouse.save();
        return res.status(201).json(newWarehouse);
    } catch (error) {
        return res.status(409).json({message: error.message});
    }
}

export const deleteWarehouse = async (req, res) => {
    const { id } = req.params;
    try {
        const warehouse = await warehouseModel.findById(id);
        if (!warehouse){
            return res.status(404).json({message: "No warehouse found"});
        } else {
            await warehouseModel.findByIdAndDelete(id);
            return res.status(200).json({message: "warehouse deleted"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateWarehouse = async (req, res) => {
    const { id } = req.params;
    const warehouse = req.body;
    try {
        const updateWarehouse = await warehouseModel.findByIdAndUpdate(id, warehouse, {new: true});
        return res.status(200).json(updateWarehouse);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const changeStatusWarehouse = async (req, res) => {
    const { id } = req.params;
    try {
        const warehouse = await warehouseModel.findById(id);
        if (!warehouse){
            return res.status(404).json({message: "No warehouse found"});
        } else {
            if (warehouse.status === "active"){
                warehouse.status = "deleted";
            } else {
                warehouse.status = "active";
            }
            await warehouse.save();
            return res.status(200).json(warehouse);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}