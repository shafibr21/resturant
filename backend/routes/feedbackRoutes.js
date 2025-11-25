const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {
  getFeedbacks,
  getFeedbackById,
  createFeedback,
  approveFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");

// Validation rules
const feedbackValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("text").trim().notEmpty().withMessage("Feedback text is required"),
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),
];

// Routes
router.get("/", getFeedbacks);
router.get("/:id", getFeedbackById);
router.post("/", feedbackValidation, validate, createFeedback);
router.put("/:id/approve", approveFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
