const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  videoUrl: String,
  duration: Number, // in seconds
  position: {
    type: Number,
    required: true,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
});

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: String,
    instructor: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: [
        "Development",
        "Design",
        "Marketing",
        "Business",
        "Photography",
        "Music",
      ],
      default: "Development",
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    chapters: [chapterSchema],
    isPublished: {
      type: Boolean,
      default: false,
    },
    enrolledCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
