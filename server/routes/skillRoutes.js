const express = require("express");
const Skill = require("../models/Skill");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

router.post("/", auth, async (req, res) => {
  const skill = await Skill.create(req.body);
  res.json(skill);
});

router.delete("/:id", auth, async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

module.exports = router;