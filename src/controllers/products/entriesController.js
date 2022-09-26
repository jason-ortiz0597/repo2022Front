import EntriesModel from "../../models/products/EntriesModel.js";

// Create new entries

export const createEntries = async (req, res) => {
    try {
        const { product, quantity, price, total } = req.body;
        const entries = new EntriesModel({ product, quantity, price, total });
        await entries.save();
        res.json({ message: "Entries created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// create new recive entries
        