const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const Course = require("../models/Course");

// Get user progress for a course
router.get("/:userId/:courseId", async (req, res) => {
  try {
    const progress = await Progress.findOne({
      userId: req.params.userId,
      courseId: req.params.courseId,
    });

    if (!progress) {
      return res.json({
        userId: req.params.userId,
        courseId: req.params.courseId,
        completedChapters: [],
        currentChapter: 0,
        progressPercentage: 0,
        isCompleted: false,
      });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update progress - mark chapter as complete
router.post("/complete", async (req, res) => {
  try {
    const { userId, courseId, chapterPosition } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    let progress = await Progress.findOne({ userId, courseId });

    if (!progress) {
      progress = new Progress({
        userId,
        courseId,
        completedChapters: [chapterPosition],
        currentChapter: chapterPosition,
      });
    } else {
      if (!progress.completedChapters.includes(chapterPosition)) {
        progress.completedChapters.push(chapterPosition);
      }
      progress.currentChapter = Math.max(
        progress.currentChapter,
        chapterPosition
      );
    }

    // Calculate progress percentage
    const totalChapters = course.chapters.length;
    progress.progressPercentage = Math.round(
      (progress.completedChapters.length / totalChapters) * 100
    );
    progress.isCompleted = progress.completedChapters.length === totalChapters;

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all courses progress for a user
router.get("/:userId", async (req, res) => {
  try {
    const progressList = await Progress.find({
      userId: req.params.userId,
    }).populate("courseId");
    res.json(progressList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
