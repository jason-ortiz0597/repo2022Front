import typeProvaiderModel from "../../models/products/typeProvaiderModel.js";

export const getTypeProvaider = async (req, res) => {
    try {
        const typeProvaider = await typeProvaiderModel.find();
        if (!typeProvaider){
            return res.status(404).json({message: "No typeProvaider found"});
        } else {
            return res.status(200).json(typeProvaider);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const getTypeProvaiderActive = async (req, res) => {
    try {
        const typeProvaider = await typeProvaiderModel.find({status: "active"});
        if (!typeProvaider){
            return res.status(404).json({message: "No typeProvaider found"});
        } else {
            return res.status(200).json(typeProvaider);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createTypeProvaider = async (req, res) => {
    const typeProvaider = req.body;
    const newTypeProvaider = new typeProvaiderModel(typeProvaider);
    try {
        await newTypeProvaider.save();
        return res.status(201).json(newTypeProvaider);
    } catch (error) {
        return res.status(409).json({message: error.message});
    }
}


export const deleteTypeProvaider = async (req, res) => {
    const { id } = req.params;
    try {
        const typeProvaider = await typeProvaiderModel.findById(id);
        if (!typeProvaider){
            return res.status(404).json({message: "No typeProvaider found"});
        } else {
            await typeProvaiderModel.findByIdAndDelete(id);
            return res.status(200).json({message: "typeProvaider deleted"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateTypeProvaider = async (req, res) => {
    const { id } = req.params;
    const typeProvaider = req.body;
    try {
        const typeProvaiderFound = await typeProvaiderModel.findById(id);
        if (!typeProvaiderFound){
            return res.status(404).json({message: "No typeProvaider found"});
        } else {
            const typeProvaiderUpdated = await typeProvaiderModel.findByIdAndUpdate(id, typeProvaider, {new: true});
            return res.status(200).json(typeProvaiderUpdated);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



export const updateStatusTypeProvaider = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const typeProvaiderFound = await typeProvaiderModel.findById(id);
        if (!typeProvaiderFound){
            return res.status(404).json({message: "No typeProvaider found"});
        } else {
            const typeProvaiderUpdated = await typeProvaiderModel.findByIdAndUpdate(id, {status: status}, {new: true});
            return res.status(200).json(typeProvaiderUpdated);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}