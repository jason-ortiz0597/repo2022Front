import EntriesModel from "../../models/products/EntriesModel.js";

// Create new entries and add to total product

export const createEntries = async (req, res) => {
    try {
        const { product, quantity, price, date, status } = req.body;
        const exitsproduct = await EntriesModel.findOne({ product });
        if (exitsproduct) {
            
            const total = exitsproduct.total + quantity;
            const entries = await EntriesModel.findByIdAndUpdate(exitsproduct._id, { quantity, price, date, status, total },{new:true});
            res.json({ message: "Entries updated successfully" });
        } else {
            const entries = new EntriesModel({ product, quantity, price, date, status });
            const total = entries.total + quantity;
            entries.total = total;
            await entries.save();
            res.json({ message: "Entries created successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




// Get all entries

export const getEntries = async (req, res) => {
    try {
        const entries = await EntriesModel.find().populate('product','name');
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
            

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Get entries by id

export const getEntriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const entries = await EntriesModel.findById(id);
        if(entries){
            res.json(entries);
        }else {
            res.status(404).json({ message: "No entries found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update entries

export const updateEntries = async (req, res) => {
    try {
        const { id } = req.params;
        const { product, quantity, price, total, date,status } = req.body;
        const entries = await EntriesModel.findByIdAndUpdate(id, { product, quantity, price, total, date, status });
        if(entries){
            res.json({ message: "Entries updated successfully" });
        }else {
            res.status(404).json({ message: "No entries found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete entries

export const deleteEntries = async (req, res) => {
    try {
        const { id } = req.params;
        const entries = await EntriesModel.findByIdAndDelete(id);
        if(entries){
            res.json({ message: "Entries deleted successfully" });
        }else {
            res.status(404).json({ message: "No entries found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product

export const getEntriesByProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const entries = await EntriesModel.find({ product: id });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by status

export const getEntriesByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const entries = await EntriesModel.find({ status: status });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by date

export const getEntriesByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const entries = await EntriesModel.find({ date: date });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by date range

export const getEntriesByDateRange = async (req, res) => {
    try {
        const { start, end } = req.params;
        const entries = await EntriesModel.find({ date: { $gte: start, $lte: end } });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product and status

export const getEntriesByProductAndStatus = async (req, res) => {
    try {
        const { id, status } = req.params;
        const entries = await EntriesModel.find({ product: id, status: status });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product and date

export const getEntriesByProductAndDate = async (req, res) => {
    try {
        const { id, date } = req.params;
        const entries = await EntriesModel.find({ product: id, date: date });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product and date range

export const getEntriesByProductAndDateRange = async (req, res) => {
    try {
        const { id, start, end } = req.params;
        const entries = await EntriesModel.find({ product: id, date: { $gte: start, $lte: end } });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product, status and date

export const getEntriesByProductStatusAndDate = async (req, res) => {

    try {
        const { id, status, date } = req.params;
        const entries = await EntriesModel.find({ product: id, status: status, date: date });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product, status and date range

export const getEntriesByProductStatusAndDateRange = async (req, res) => {
    try {
        const { id, status, start, end } = req.params;
        const entries = await EntriesModel.find({ product: id, status: status, date: { $gte: start, $lte: end } });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product, date and date range

export const getEntriesByProductDateAndDateRange = async (req, res) => {
    try {
        const { id, date, start, end } = req.params;
        const entries = await EntriesModel.find({ product: id, date: date, date: { $gte: start, $lte: end } });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get entries by product, status, date and date range

export const getEntriesByProductStatusDateAndDateRange = async (req, res) => {
    try {
        const { id, status, date, start, end } = req.params;
        const entries = await EntriesModel.find({ product: id, status: status, date: date, date: { $gte: start, $lte: end } });
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}






        