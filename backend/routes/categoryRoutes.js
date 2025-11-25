const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categoryController");

// Routes
router.get("/", getCategories);

module.exports = router;
