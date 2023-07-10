import ProductModel from "../models/Products.js";

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      state: req.body.state,
    });

    const card = await doc.save();

    res.json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create an product" });
  }
};
export const getAll = async (req, res) => {
  try {
    const cards = await ProductModel.find();
    res.json(cards);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Products not found" });
  }
};
export const getOne = async (req, res) => {
  try {
    const cardId = req.params.id;
    const card = await ProductModel.findById(cardId);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Product not found" });
  }
};
export const remove = async (req, res) => {
  try {
    const cardId = req.params.id;

    await ProductModel.findByIdAndDelete({
      _id: cardId,
    });

    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Product not found" });
  }
};
export const update = async (req, res) => {
  try {
    const cardId = req.params.id;

    await ProductModel.updateOne(
      {
        _id: cardId,
      },
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        state: req.body.state,
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Product not found" });
  }
};
