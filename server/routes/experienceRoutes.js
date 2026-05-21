const express = require("express");
const Experience = require("../models/Experience");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const experience = await Experience.find();
  res.json(experience);
});

router.post("/", auth, async (req, res) => {
  const experience = await Experience.create(req.body);
  res.json(experience);
});

router.delete("/:id", auth, async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

module.exports = router;