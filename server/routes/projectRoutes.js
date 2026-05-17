const express = require("express");
const {
  getProjects,
  getAdminProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");
const { projectValidation } = require("../middleware/validators");
const { validationResult } = require("express-validator");

const router = express.Router();

// Validation error handler
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

// Protected routes (must come before public /:id route)
router.get("/admin/my-projects", protect, getAdminProjects);
router.post("/", protect, projectValidation, validateRequest, createProject);
router.put("/:id", protect, projectValidation, validateRequest, updateProject);
router.delete("/:id", protect, deleteProject);

// Public routes
router.get("/", getProjects);
router.get("/:id", getProject);

module.exports = router;