const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", auth, async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

router.put("/:id", auth, async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(project);
});

router.delete("/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.json({
    message: "Project Deleted",
  });
});

module.exports = router;