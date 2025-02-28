const Book = require("../models/Books");

const allListBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: "Books not listed", error });
  }
};

const categoryBook = async (req, res) => {
  try {
    const { category } = req.params;
    const books = await Book.find({ category: category });
    if (!books || books.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: "Books not listed", error });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      name,
      slug,
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
      slug,
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

module.exports = { createBook, allListBook, categoryBook };
