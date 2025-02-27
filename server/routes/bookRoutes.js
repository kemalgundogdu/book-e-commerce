const express = require("express");
const router = express.Router();
const {
  createBook,
  allListBook,
  categoryBook,
} = require("../controllers/bookController");

router.get("/all-books", allListBook);
router.get("/category/:category", categoryBook);
router.post("/add", createBook);

module.exports = router;
