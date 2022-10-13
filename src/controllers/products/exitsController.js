//import ExitsModel

import ExitsModel from '../../models/products/exitsModel.js';
import typeExitModel from '../../models/products/typeExitsModel.js';
import EntryModel from '../../models/products/EntriesModel.js';
import ProductModel from '../../models/products/ProductModel.js';

export const createExits = async (req, res) => {
    try {
        const { product, quantity, price, date, typeExits,status } = req.body;
        const exitsEntry = await EntryModel.findOne({ product });
        //const exitsProduct = await ProductModel.findOne({ _id: product });
        const nameProduct = exitsEntry.product;
        console.log(nameProduct);
        const totalEntry = exitsEntry.total;
        console.log(totalEntry);
        console.log(exitsEntry)
        console.log(product)
        if (!exitsEntry) {
            return res.status(404).json({
                message: 'Producto no encontrado',
           });
        } else {
            if (totalEntry < quantity) {
                return res.status(404).json({
                    message: 'No hay suficiente producto',
                });
           } else {
            
            exitsEntry.total = totalEntry - quantity;
            await exitsEntry.updateOne(exitsEntry);

    

            const exits = new ExitsModel({
                product,
                quantity,
                price,
                date,
                typeExits,
                status,
            });
           
           const exitsSave = await exits.save();
            res.status(201).json(exitsSave);
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


        


export const getExits = async (req, res) => {
    try {
        const exits = await ExitsModel.find();
        res.json(exits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteExits = async (req, res) => {
    try {
        const exits = await ExitsModel.findById(req.params.id);
        if (!exits) {
            return res.status(404).json({
                message: 'Producto no encontrado',
            });
        } else {
            await ExitsModel.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Producto eliminado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




export const getTypeExit = async (req, res) => {
    try {
        const typeExit = await typeExitModel.find();
        res.json(typeExit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTypeExit = async (req, res) => {
    try {
        const { name, description, status } = req.body;
        const typeExit = new typeExitModel({ name, description, status });
        await typeExit.save();
        res.json({ message: "Type Exit created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateExits = async (req, res) => {
    try {
        const { id } = req.params;
        const { product, quantity, price, date, typeExits, status } = req.body;
        const exits = await ExitsModel.findByIdAndUpdate(id, { product, quantity, price, date, typeExits, status });
        if (exits) {
            res.json({ message: "Exits updated successfully" });
        } else {
            res.status(404).json({ message: "No exits found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


