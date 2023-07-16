import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    state: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ProductModel", ProductSchema);
