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

const oneBook = async (req, res) => {
  try {
    const { name } = req.params;
    const book = await Book.findOne({ slug: name });
    if (!book || book.length === 0) return res.status(200).json({});
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: "Book not find", error });
  }
};

const oneUpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
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
    if (!id) return res.status(400).json({ message: "Book id is required" });
    const book = await Book.findByIdAndUpdate(
      id,
      {
        name,
        image,
        author,
        category,
        shortDescription,
        longDescription,
        oldPrice,
        price,
        sku,
      },
      { new: true }
    );
    if (!book) return res.status(400).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: "Book not find", error });
  }
};

const searchBook = async (req, res) => {
  try {
    const { name } = req.params;
    if (!name)
      return res.status(400).json({ message: "Query name is required" });
    const books = await Book.find({ name: { $regex: name, $options: "i" } });
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: "Books not find", error });
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

module.exports = { createBook, allListBook, categoryBook, oneBook, searchBook, oneUpdateBook };
