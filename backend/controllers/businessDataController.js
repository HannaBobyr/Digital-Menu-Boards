import businessDataModel from "../models/businessData.js";

export const getAll = async (req, res) => {
    try {
      const businessData = await businessDataModel.find();
      res.json(businessData);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Data not found" });
    }
  };
export const create = async (req, res) => {
  try {
    const doc = new businessDataModel({
        website: req.body.website,
        phone: req.body.phone,
        address: req.body.address,
        name: req.body.name,
    });

    const businessData = await doc.save();

    res.json(businessData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create busiess data" });
  }
};
export const remove = async (req, res) => {
  try {
    const businessDataId = req.params.id;

    await businessDataModel.findByIdAndDelete({
      _id: businessDataId,
    });

    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Data not found" });
  }
};
export const update = async (req, res) => {
  try {
    const businessDataId = req.params.id;

    await businessDataModel.updateOne(
      {
        _id: businessDataId,
      },
      {
        website: req.body.website,
        phone: req.body.phone,
        address: req.body.address,
        name: req.body.name,
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Data not found" });
  }
};
