import EntriesModel from "../../models/products/EntriesModel.js";
import typeEntrieModel from "../../models/products/typeEntrieModel.js";
import ProductsModel from "../../models/products/ProductModel.js";



// Create new entries and add to total product
export const createEntries = async (req, res) => {
    try {
        const { product, quantity, price, date,typeEntries, status } = req.body;
        const exitsproduct = await EntriesModel.findOne({ product });
      //const products = await ProductsModel.findById ( product );
        
        if (exitsproduct) {
        //    const minStock = products.minStock;
         //   const maxStock = products.maxStock;
           const total = exitsproduct.total + quantity;
         //   if (total < minStock) {
         //       exitsproduct.excess = minStock - total;
        //    } else if (total > maxStock) {
        //       exitsproduct.excess = total - maxStock;
         //   } else {
        //         exitsproduct.excess = 0;
        //    }
            //find and update and create new entries
            const entries = await EntriesModel.findOneAndUpdate(
                { product },
                {
                    $push: {
                        entries: {
                            quantity,
                            price,
                            date,
                            typeEntries,
                            status
                        }
                    },
                    total
                },
                { new: true }
            );
        //    const entries = await EntriesModel.findByIdAndUpdate(exitsproduct._id, { quantity, price, date,typeEntries, status, total });
            
            res.json({ message: "Entries updated successfully" });
        } else {
            const entries = new EntriesModel({ product, quantity, price, date, typeEntries, status });
            const total = entries.total + quantity;
            entries.total = total; 
        
          //  const minStock = products.minStock;
           //const maxStock = products.maxStock;
    
           // if (total <= minStock) {
           //     entries.excess = minStock - total;
           // } else if (total >= maxStock) {
           //     entries.excess = total - maxStock;
         //   } else {
         //       entries.excess = 0;
         //   }

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
        const entries = await EntriesModel.find().populate('product','name').populate('typeEntries','name');
        if(entries.length === 0){
            res.status(404).json({ message: "No entries found" });
        }else {
            res.json(entries);
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

export const getTypeEntries = async (req, res) => {
    try {
        const typeEntries = await typeEntrieModel.find();
        if(typeEntries.length === 0){
            res.status(404).json({ message: "No type entries found" });
        }else {
            res.json(typeEntries);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create new type entries

export const createTypeEntries = async (req, res) => {
    try {
        const { name,description, status } = req.body;
        const exitsTypeEntries = await typeEntrieModel.findOne({ name });
        if (exitsTypeEntries) {
            res.status(404).json({ message: "Type entries already exists" });
        } else {
            const typeEntries = new typeEntrieModel({ name,description,status });
            await typeEntries.save();
            res.json({ message: "Type entries created successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




/*
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
*/









        