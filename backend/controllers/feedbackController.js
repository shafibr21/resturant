const Feedback = require("../models/Feedback");

// @desc    Get all feedbacks
// @route   GET /api/feedback
// @access  Public
exports.getFeedbacks = async (req, res, next) => {
  try {
    const { approved } = req.query;
    let query = {};

    if (approved !== undefined) {
      query.isApproved = approved === "true";
    }

    const feedbacks = await Feedback.find(query).sort("-createdAt");

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single feedback
// @route   GET /api/feedback/:id
// @access  Public
exports.getFeedbackById = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        error: "Feedback not found",
      });
    }

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new feedback
// @route   POST /api/feedback
// @access  Public
exports.createFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req.body);

    res.status(201).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Approve feedback
// @route   PUT /api/feedback/:id/approve
// @access  Private/Admin
exports.approveFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );

    if (!feedback) {
      return res.status(404).json({
        success: false,
        error: "Feedback not found",
      });
    }

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private/Admin
exports.deleteFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        error: "Feedback not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: "Feedback deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
