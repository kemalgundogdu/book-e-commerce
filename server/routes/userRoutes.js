const express = require("express");
const router = express.Router();
const { register, login, me, logout, allUsers } = require("../controllers/userController");
// middlewares
const roleMiddleware = require("../middlewares/roleMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", me);
router.get("/logout", logout);
router.get("/all", allUsers, roleMiddleware);

module.exports = router;
