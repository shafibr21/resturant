const Dish = require("../models/Dish");

// @desc    Get all dishes
// @route   GET /api/dishes
// @access  Public
exports.getDishes = async (req, res, next) => {
  try {
    const { category, available } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (available !== undefined) {
      query.isAvailable = available === "true";
    }

    const dishes = await Dish.find(query).sort("-createdAt");

    res.status(200).json({
      success: true,
      count: dishes.length,
      data: dishes,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get best seller dishes
// @route   GET /api/dishes/bestsellers
// @access  Public
exports.getBestSellers = async (req, res, next) => {
  try {
    const dishes = await Dish.find({ isBestSeller: true, isAvailable: true });

    res.status(200).json({
      success: true,
      count: dishes.length,
      data: dishes,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single dish
// @route   GET /api/dishes/:id
// @access  Public
exports.getDishById = async (req, res, next) => {
  try {
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      return res.status(404).json({
        success: false,
        error: "Dish not found",
      });
    }

    res.status(200).json({
      success: true,
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new dish
// @route   POST /api/dishes
// @access  Private/Admin
exports.createDish = async (req, res, next) => {
  try {
    const dish = await Dish.create(req.body);

    res.status(201).json({
      success: true,
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update dish
// @route   PUT /api/dishes/:id
// @access  Private/Admin
exports.updateDish = async (req, res, next) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!dish) {
      return res.status(404).json({
        success: false,
        error: "Dish not found",
      });
    }

    res.status(200).json({
      success: true,
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete dish
// @route   DELETE /api/dishes/:id
// @access  Private/Admin
exports.deleteDish = async (req, res, next) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);

    if (!dish) {
      return res.status(404).json({
        success: false,
        error: "Dish not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: "Dish deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
