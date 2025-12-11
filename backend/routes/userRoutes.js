const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Course = require("../models/Course");

// Create or update user from Clerk webhook
router.post("/webhook", async (req, res) => {
  try {
    const { id, email_addresses, first_name, last_name, image_url } =
      req.body.data;
    const eventType = req.body.type;

    if (eventType === "user.created" || eventType === "user.updated") {
      const user = await User.findOneAndUpdate(
        { clerkId: id },
        {
          clerkId: id,
          email: email_addresses?.[0]?.email_address || "",
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
        },
        { upsert: true, new: true }
      );
      res.json(user);
    } else if (eventType === "user.deleted") {
      await User.findOneAndDelete({ clerkId: id });
      res.json({ message: "User deleted" });
    } else {
      res.json({ message: "Event not handled" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by Clerk ID
router.get("/:clerkId", async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId }).populate(
      "enrolledCourses"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Enroll user in course
router.post("/:clerkId/enroll/:courseId", async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if already enrolled
    if (user.enrolledCourses.includes(course._id)) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    user.enrolledCourses.push(course._id);
    await user.save();

    // Increment course enrollment count
    course.enrolledCount += 1;
    await course.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
