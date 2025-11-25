// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = [
      { name: "All", value: "all" },
      { name: "Breakfast", value: "breakfast" },
      { name: "Lunch", value: "lunch" },
      { name: "Dinner", value: "dinner" },
      { name: "Dessert", value: "dessert" },
      { name: "Drinks", value: "drinks" },
    ];

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
