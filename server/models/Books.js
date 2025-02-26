const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  oldPrice: { type: String, default: null },
  price: { type: String, required: true },
  sku: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
