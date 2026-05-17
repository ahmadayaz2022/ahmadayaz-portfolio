const express = require("express");
const {
  sendMessage,
  getMessages,
  markAsRead,
  deleteMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public route
router.post("/", sendMessage);

// Protected routes (Admin only)
router.get("/", protect, getMessages);
router.put("/:id/read", protect, markAsRead);
router.delete("/:id", protect, deleteMessage);

module.exports = router;