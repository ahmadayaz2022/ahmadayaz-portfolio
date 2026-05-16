const Message = require("../models/Message");

// Send Message
const sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);

    res.status(201).json({
      message: "Message sent successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};