import Provaider from "../../models/products/ProvaiderModel.js";

export const getProvaider = async (req, res) => {
    try {
        const provaider = await Provaider.find().populate("typeProvaider", "name");
        if (!provaider){
            return res.status(404).json({message: "No provaider found"});
        } else {
            return res.status(200).json(provaider);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//get provaider by status active populate
export const getProvaiderActive = async (req, res) => {
    try {
        const provaider = await Provaider.find({status: "active"}).populate("typeProvaider", "name");
        if (!provaider){
            return res.status(404).json({message: "No provaider found"});
        } else {
            return res.status(200).json(provaider);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const createProvaider = async (req, res) => {
    const provaider = req.body;
    const newProvaider = new Provaider(provaider);
    try {
        await newProvaider.save();
        return res.status(201).json(newProvaider);
    } catch (error) {
        return res.status(409).json({message: error.message});
    }
}

export const deleteProvaider = async (req, res) => {
    const { id } = req.params;
    try {
        const provaider = await Provaider.findById(id);
        if (!provaider){
            return res.status(404).json({message: "No provaider found"});
        } else {
            await Provaider.findByIdAndDelete(id);
            return res.status(200).json({message: "provaider deleted"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateProvaider = async (req, res) => {
    const { id } = req.params;
    const provaider = req.body;
    try {
        const updateProvaider = await Provaider.findByIdAndUpdate(id, provaider, {new: true});
        return res.status(200).json(updateProvaider);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const updateStatusProvaider = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const provaiderFound = await Provaider.findById(id);
        if (!provaiderFound){
            return res.status(404).json({message: "No Provaider found"});
        } else {
            const provaiderUpdated = await Provaider.findByIdAndUpdate(id, {status: status}, {new: true});
            return res.status(200).json(provaiderUpdated);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}








