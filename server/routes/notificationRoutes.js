// routes/notificationRoutes.js
const express = require("express");
const {
  getDashboardStats,
  getUnreadCount,
  getRecentActivity,
  checkForUpdates,
} = require("../controllers/notificationController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// All notification routes are protected (Admin only)
router.get("/dashboard", protect, authorize("admin"), getDashboardStats);
router.get("/unread-count", protect, authorize("admin"), getUnreadCount);
router.get("/recent-activity", protect, authorize("admin"), getRecentActivity);
router.get("/check-updates", protect, authorize("admin"), checkForUpdates);

module.exports = router;