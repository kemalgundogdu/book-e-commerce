const express = require("express");
const router = express.Router();
const {
  createBook,
  allListBook,
  oneBook,
  categoryBook,
  searchBook,
} = require("../controllers/bookController");

router.get("/all-books", allListBook);
router.get("/:name", oneBook);
router.get("/category/:category", categoryBook);
router.get("/s/:name", searchBook);
router.post("/add", createBook);

module.exports = router;
