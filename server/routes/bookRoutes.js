const express = require("express");
const router = express.Router();
const {
  createBook,
  allListBook,
  oneBook,
  categoryBook,
  searchBook,
  oneUpdateBook,
  deleteBook,
} = require("../controllers/bookController");
// middlewares
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get("/all-books", allListBook);
router.get("/:name", oneBook);
router.get("/category/:category", categoryBook);
router.get("/s/:name", searchBook);
router.post("/add", createBook, roleMiddleware);
router.put("/update/:id", oneUpdateBook, roleMiddleware);
router.delete("/delete/:id", deleteBook, roleMiddleware);

module.exports = router;
