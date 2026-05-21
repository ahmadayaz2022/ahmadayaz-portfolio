const express = require("express");
const Hero = require("../models/Hero");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const hero = await Hero.findOne();
  res.json(hero);
});

router.post("/", auth, async (req, res) => {
  const hero = await Hero.create(req.body);
  res.json(hero);
});

router.put("/:id", auth, async (req, res) => {
  const hero = await Hero.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(hero);
});

module.exports = router;