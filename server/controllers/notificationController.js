const Notification = require("../models/Notification");
const Project = require("../models/Project");
const Message = require("../models/Message");

// Get Dashboard Stats (For real-time dashboard updates via polling)
const getDashboardStats = async (req, res, next) => {
  try {
    const [
      totalProjects,
      publishedProjects,
      draftProjects,
      totalMessages,
      unreadMessages,
      recentProjects,
      recentMessages,
    ] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ status: "published" }),
      Project.countDocuments({ status: "draft" }),
      Message.countDocuments(),
      Message.countDocuments({ status: "unread" }),
      Project.find()
        .sort({ updatedAt: -1 })
        .limit(5)
        .select("title status updatedAt")
        .lean(),
      Message.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name subject status createdAt")
        .lean(),
    ]);

    // Set cache control for short polling
    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    res.set("X-Timestamp", new Date().toISOString());

    res.status(200).json({
      success: true,
      data: {
        projects: {
          total: totalProjects,
          published: publishedProjects,
          draft: draftProjects,
          recent: recentProjects,
        },
        messages: {
          total: totalMessages,
          unread: unreadMessages,
          recent: recentMessages,
        },
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get Unread Count (For badge notifications)
const getUnreadCount = async (req, res, next) => {
  try {
    const unreadMessages = await Message.countDocuments({ status: "unread" });
    
    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    
    res.status(200).json({
      success: true,
      data: {
        unreadMessages,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get Recent Activity Feed
const getRecentActivity = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;

    const [recentMessages, recentProjects] = await Promise.all([
      Message.find()
        .sort({ createdAt: -1 })
        .limit(limit / 2)
        .select("name subject status createdAt")
        .lean(),
      Project.find()
        .sort({ updatedAt: -1 })
        .limit(limit / 2)
        .select("title status updatedAt")
        .lean(),
    ]);

    // Combine and sort activities
    const activities = [
      ...recentMessages.map((m) => ({
        type: "message",
        action: "received",
        title: `New message from ${m.name}`,
        subtitle: m.subject,
        status: m.status,
        timestamp: m.createdAt,
        id: m._id,
      })),
      ...recentProjects.map((p) => ({
        type: "project",
        action: p.status === "published" ? "published" : "updated",
        title: p.title,
        status: p.status,
        timestamp: p.updatedAt,
        id: p._id,
      })),
    ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    
    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities.slice(0, limit),
    });
  } catch (error) {
    next(error);
  }
};

// Check for updates since timestamp (For efficient polling)
const checkForUpdates = async (req, res, next) => {
  try {
    const { since } = req.query;

    if (!since) {
      return res.status(400).json({
        success: false,
        message: "Please provide a 'since' timestamp",
      });
    }

    const sinceDate = new Date(since);

    const [newMessages, updatedProjects] = await Promise.all([
      Message.countDocuments({ createdAt: { $gt: sinceDate } }),
      Project.countDocuments({ updatedAt: { $gt: sinceDate } }),
    ]);

    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    
    res.status(200).json({
      success: true,
      data: {
        hasUpdates: newMessages > 0 || updatedProjects > 0,
        newMessages,
        updatedProjects,
        currentTimestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStats,
  getUnreadCount,
  getRecentActivity,
  checkForUpdates,
};