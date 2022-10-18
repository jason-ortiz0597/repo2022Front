//import ExitsModel

import ExitsModel from '../../models/products/exitsModel.js';
import typeExitModel from '../../models/products/typeExitsModel.js';
import EntryModel from '../../models/products/EntriesModel.js';
import ProductModel from '../../models/products/ProductModel.js';

export const createExits = async (req, res) => {
 try{
    const { entry, typeExits, quantity, price } = req.body;
    const existeEntry = await EntryModel.findById(entry);
    const existeProduct = await ProductModel.findById(existeEntry.product);
    const totalEntry = existeEntry.total;
    if (!existeEntry || !existeProduct) {
        return res.status(400).json({
            ok: false,
            msg: 'No existe el producto o la entrada'
        });
    } else {
        if (totalEntry < quantity) {
            return res.status(400).json({
                ok: false,
                msg: 'No hay suficientes productos para realizar la salida'
            });
        } else {
            
            const exits = new ExitsModel(req.body);
            
            existeEntry.total = totalEntry - quantity;
            exits.total = totalEntry - quantity;
            await existeEntry.updateOne(existeEntry);
            await exits.save();
            res.status(201).json({
                ok: true,
                msg: 'Salida registrada',
                exits
            });
        }
    }
} catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Error al crear la salida",
    });
}
};

    


export const getExits = async (req, res) => {
    try {
        const exits = await ExitsModel.find().populate({ path: 'entry', select: 'product', populate: { path: 'product', select: 'name' } }).populate('typeExits');
       // console.log(exits);
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

//get all inventory
export const getInventory = async (req, res) => {
    try {
        const products = await ProductModel.find()
        const entries = await EntryModel.find().populate('product');
        const exits = await ExitsModel.find().populate({ path: 'entry', select: 'product', populate: { path: 'product', select: 'name' } }).populate('typeExits');
        const inventory = [];
        products.forEach(product => {
            const entry = entries.find(entry => entry.product._id.toString() === product._id.toString());
            const exit = exits.find(exit => exit.entry.product._id.toString() === product._id.toString());
            const minStock = product.minStock;
            const maxStock = product.maxStock;
            const totalEntry = entry ? entry.total : 0;
            const totalExit = exit ? exit.total : 0;
            const totalS =  totalEntry;
            const status = totalEntry < minStock ? 'Bajo' : totalEntry > maxStock ? 'Alto' : 'Normal';
            inventory.push({
                product: product.name,
                totalEntry,
                totalExit,
                totalS,
                status,
                minStock,
                maxStock
            });
        });
        res.json(inventory);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


