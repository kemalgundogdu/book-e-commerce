const Book = require("../models/Books");

const allListBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: "Books not listed", error });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      name,
      image,
      author,
      category,
      shortDescription,
      longDescription,
      oldPrice,
      price,
      sku,
    } = req.body;
    const newBook = new Book({
      name,
      image,
      author,
      category,
      shortDescription,
      longDescription,
      oldPrice,
      price,
      sku,
    });
    await newBook.save();
    res.status("200").json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Book could not be created", error });
  }
};

module.exports = { createBook, allListBook };
