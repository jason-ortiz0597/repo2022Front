import unitModel from "../../models/products/unitModel.js";

import mensureModel from "../../models/products/mensureModel.js";


export const createUnit = async (req, res) => {
    try {
        const { name, abreviation } = req.body;
        const newUnit = new unitModel({
            name,
            abreviation,
        });
        const unitSaved = await newUnit.save();
        res.status(201).json(unitSaved);
    } catch (error) {
        res.status(500).json(error);
    }
}

//get units message in case of error
export const getUnits = async (req, res) => {
    try {
        const units = await unitModel.find();
        if (!units) throw Error('No units');
        res.status(200).json(units);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUnit = async (req, res) => {
    try {
        const unit = await unitModel.findByIdAndDelete(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: "Unit not found" });
        }
        res.json({ message: "Unit deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUnit = async (req, res) => {
    try {
        const { name, abreviation } = req.body;
        const unit = await unitModel.findById(req.params.id);
        if (unit) {
            unit.name = name;
            unit.abreviation = abreviation;
            await unit.save();
            res.json({ message: "Unit updated successfully" });
        } else {
            res.status(404).json({ message: "Unit not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//******* */

export const createMensure = async (req, res) => {
    try {
        const {  relation, unit } = req.body;
        const newMensure = new mensureModel({
            
            relation,
            unit
        });
        const mensureSaved = await newMensure.save();
        res.status(201).json(mensureSaved);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getMensures = async (req, res) => {
    try {
        const mensures = await mensureModel.find().populate('unit','name');
        if (!mensures) throw Error('No mensures');
        res.status(200).json(mensures);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteMensure = async (req, res) => {
    try {
        const mensure = await mensureModel.findByIdAndDelete(req.params.id);
        if (!mensure) {
            return res.status(404).json({ message: "Mensure not found" });
        }
        res.json({ message: "Mensure deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateMensure = async (req, res) => {
    try {
        const {  relation, unit } = req.body;
        const mensure = await mensureModel.findById(req.params.id);
        if (mensure) {
            mensure.relation = relation;
            mensure.unit = unit;
            await mensure.save();
            res.json({ message: "Mensure updated successfully" });
        } else {
            res.status(404).json({ message: "Mensure not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getMensurebyUnit = async (req, res) => {
    try {
        const mensures = await mensureModel.find({unit:req.params.id}).populate('unit','name');
        if (!mensures) throw Error('No mensures');
        res.status(200).json(mensures);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUnitbyMensure = async (req, res) => {
    try {
        const mensures = await mensureModel.find({unit:req.params.id}).populate('unit','name');
        if (!mensures) throw Error('No mensures');
        res.status(200).json(mensures);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


