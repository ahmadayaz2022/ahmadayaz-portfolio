const express = require("express");
const Education = require("../models/Education");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const education = await Education.find();
  res.json(education);
});

router.post("/", auth, async (req, res) => {
  const education = await Education.create(req.body);
  res.json(education);
});

router.delete("/:id", auth, async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

module.exports = router;