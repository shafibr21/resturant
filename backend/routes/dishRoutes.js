const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {
  getDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
  getBestSellers,
} = require("../controllers/dishController");

// Validation rules
const dishValidation = [
  body("name").trim().notEmpty().withMessage("Dish name is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  body("category")
    .isIn(["breakfast", "lunch", "dinner", "dessert", "drinks"])
    .withMessage("Invalid category"),
  body("image").trim().notEmpty().withMessage("Image URL is required"),
];

// Routes
router.get("/", getDishes);
router.get("/bestsellers", getBestSellers);
router.get("/:id", getDishById);
router.post("/", dishValidation, validate, createDish);
router.put("/:id", dishValidation, validate, updateDish);
router.delete("/:id", deleteDish);

module.exports = router;
