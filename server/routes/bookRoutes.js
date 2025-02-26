const express = require("express");
const router = express.Router();
const { createBook, allListBook } = require("../controllers/bookController");

router.get('/all-books', allListBook);
router.post("/add", createBook);

module.exports = router;
