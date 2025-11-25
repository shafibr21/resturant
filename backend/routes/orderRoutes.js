const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

// Validation rules
const orderValidation = [
  body("customerName")
    .trim()
    .notEmpty()
    .withMessage("Customer name is required"),
  body("customerEmail").isEmail().withMessage("Valid email is required"),
  body("customerPhone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required"),
  body("items")
    .isArray({ min: 1 })
    .withMessage("Order must contain at least one item"),
  body("items.*.dish").notEmpty().withMessage("Dish ID is required"),
  body("items.*.quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),
  body("totalAmount")
    .isFloat({ min: 0 })
    .withMessage("Total amount must be positive"),
];

// Routes
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", orderValidation, validate, createOrder);
router.put("/:id/status", updateOrderStatus);
router.delete("/:id", deleteOrder);

module.exports = router;
