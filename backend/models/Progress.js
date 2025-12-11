const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    completedChapters: [
      {
        type: Number, // chapter position
      },
    ],
    currentChapter: {
      type: Number,
      default: 0,
    },
    progressPercentage: {
      type: Number,
      default: 0,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for unique user-course combination
progressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model("Progress", progressSchema);
