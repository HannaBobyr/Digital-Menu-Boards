import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CategoryModel", CategorySchema);
