const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    brand: String,
    name: String,
    titleExtension: String,
    description: [String],
    category: String,
    size: [String],
    price: Number,
    image: String,
    rating: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
