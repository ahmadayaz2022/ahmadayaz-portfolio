const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  changePassword,
  logout,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const {
  registerValidation,
  loginValidation,
  profileValidation,
  handleValidationErrors,
} = require("../middleware/validators");
const { validationResult } = require("express-validator");

const router = express.Router();

// Validation error handler middleware
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

// Public routes
router.post("/register", registerValidation, validateRequest, registerUser);
router.post("/login", loginValidation, validateRequest, loginUser);

// Protected routes
router.get("/me", protect, getMe);
router.put("/profile", protect, profileValidation, validateRequest, updateProfile);
router.post("/change-password", protect, changePassword);
router.post("/logout", protect, logout);

module.exports = router;