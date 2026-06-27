const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/students", async (req, res) => {
  try {
    const students = await User.find(
      { role: "Student" },
      { password: 0 }
    );

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
    });
  }
});

module.exports = router;