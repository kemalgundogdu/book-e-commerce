const express = require("express");
const router = express.Router();
const {
  createBook,
  allListBook,
  oneBook,
  categoryBook,
  searchBook,
  oneUpdateBook,
} = require("../controllers/bookController");

router.get("/all-books", allListBook);
router.get("/:name", oneBook);
router.get("/category/:category", categoryBook);
router.get("/s/:name", searchBook);
router.post("/add", createBook);
router.put("/update/:id", oneUpdateBook);

module.exports = router;
