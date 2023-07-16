import CategoryModel from "../models/Category.js";

export const create = async (req, res) => {
  try {
    const doc = new CategoryModel({
      name: req.body.name,
    });

    const category = await doc.save();

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create a category" });
  }
};
export const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Categories not found" });
  }
};
export const getOne = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categories = await CategoryModel.findById(categoryId);
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Categories not found" });
  }
};
export const remove = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const result = await CategoryModel.findByIdAndDelete({
      _id: categoryId,
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Category not found" });
  }
};
export const update = async (req, res) => {
  try {
    const categoryId = req.params.id;

    await CategoryModel.updateOne(
      {
        _id: categoryId,
      },
      {
        name: req.body.name,
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Category not found" });
  }
};
