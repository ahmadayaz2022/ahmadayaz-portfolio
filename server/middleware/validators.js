const { body, param, query } = require("express-validator");

const registerValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
];

const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("password").trim().notEmpty().withMessage("Password is required"),
];

const projectValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Project title is required")
    .isLength({ max: 200 })
    .withMessage("Title cannot exceed 200 characters"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 2000 })
    .withMessage("Description cannot exceed 2000 characters"),
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isIn(["web", "mobile", "desktop", "fullstack", "frontend", "backend", "devops", "other"])
    .withMessage("Invalid category"),
  body("technologies")
    .optional()
    .isArray()
    .withMessage("Technologies must be an array"),
  body("liveUrl")
    .optional()
    .isURL()
    .withMessage("Please enter a valid URL"),
  body("githubUrl")
    .optional()
    .isURL()
    .withMessage("Please enter a valid URL"),
  body("featured")
    .optional()
    .isBoolean()
    .withMessage("Featured must be a boolean"),
  body("status")
    .optional()
    .isIn(["draft", "published", "archived"])
    .withMessage("Invalid status"),
];

const messageValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required")
    .isLength({ max: 200 })
    .withMessage("Subject cannot exceed 200 characters"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 5000 })
    .withMessage("Message cannot exceed 5000 characters"),
  body("phone")
    .optional()
    .matches(/^[0-9+\-\s()]*$/)
    .withMessage("Please enter a valid phone number"),
];

const profileValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("bio")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Bio cannot exceed 1000 characters"),
  body("title")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Title cannot exceed 200 characters"),
];

const skillValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Skill name is required"),
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),
  body("proficiency")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Proficiency must be between 1 and 100"),
];

const idValidation = [
  param("id")
    .isMongoId()
    .withMessage("Invalid ID format"),
];

module.exports = {
  registerValidation,
  loginValidation,
  projectValidation,
  messageValidation,
  profileValidation,
  skillValidation,
  idValidation,
};