import purcharseModel from "../../models/order/purcharseModel.js";
import EntriesModel from "../../models/products/EntriesModel.js";

export const createPurchase = async (req, res) => {
  try {
    const { products, quantity } = req.body;

    const purchase = await purcharseModel.create({
      products,
      quantity,
    });


    res.status(200).json({ purchase });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createDefaultPurchase = async (req, res) => {
  try {
    const { products, quantity } = ["6352f57ae0a36f1a323aefbc", 800]


    const purchase = await purcharseModel.create({
      products,
      quantity,
    });
    console.log(purchase);

  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getPurchase = async (req, res) => {
  try {
    const purchase = await purcharseModel.find().populate("products", "name");
    res.status(200).json(purchase);
  } catch (error) {
    return res.status(500).json(error);
  }
};


export const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    await purcharseModel.findByIdAndDelete(id);
    res.status(200).json("Purchase deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
}
