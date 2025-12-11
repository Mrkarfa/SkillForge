"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";

// Sample courses data (will be replaced with API call)
const allCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    category: "Development",
    level: "Beginner",
    price: 0,
    enrolledCount: 12500,
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Python & R in Data Science",
    instructor: "Kirill Eremenko",
    category: "Development",
    level: "Intermediate",
    price: 49.99,
    enrolledCount: 8700,
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass: Create Stunning Interfaces",
    instructor: "Daniel Walter Scott",
    category: "Design",
    level: "Beginner",
    price: 29.99,
    enrolledCount: 5200,
  },
  {
    id: "4",
    title: "React - The Complete Guide 2024",
    instructor: "Maximilian Schwarzmüller",
    category: "Development",
    level: "Intermediate",
    price: 0,
    enrolledCount: 15800,
  },
  {
    id: "5",
    title: "Digital Marketing Mastery: Complete Course",
    instructor: "Seth Godin",
    category: "Marketing",
    level: "Beginner",
    price: 39.99,
    enrolledCount: 3400,
  },
  {
    id: "6",
    title: "Advanced Node.js: Scalable Applications",
    instructor: "Stephen Grider",
    category: "Development",
    level: "Advanced",
    price: 59.99,
    enrolledCount: 6100,
  },
  {
    id: "7",
    title: "Photography Masterclass: Complete Guide",
    instructor: "Phil Ebiner",
    category: "Photography",
    level: "Beginner",
    price: 24.99,
    enrolledCount: 4200,
  },
  {
    id: "8",
    title: "Business Analytics with Excel",
    instructor: "Chris Dutton",
    category: "Business",
    level: "Intermediate",
    price: 34.99,
    enrolledCount: 2800,
  },
  {
    id: "9",
    title: "Complete Music Production Course",
    instructor: "Jason Allen",
    category: "Music",
    level: "Beginner",
    price: 44.99,
    enrolledCount: 3100,
  },
];

const categories = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Business",
  "Photography",
  "Music",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-page-header">
          <h1 className="courses-page-title">Explore Our Courses</h1>
          <p className="courses-page-subtitle">
            Discover courses taught by industry experts and advance your skills
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* Category Filter */}
        <div className="category-pills">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-pill ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Level Filter */}
        <div
          className="category-pills"
          style={{ marginBottom: "var(--spacing-2xl)" }}
        >
          <span
            style={{
              color: "var(--text-secondary)",
              marginRight: "var(--spacing-sm)",
            }}
          >
            Level:
          </span>
          {levels.map((level) => (
            <button
              key={level}
              className={`category-pill ${
                selectedLevel === level ? "active" : ""
              }`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "var(--spacing-xl)",
          }}
        >
          Showing {filteredCourses.length} course
          {filteredCourses.length !== 1 ? "s" : ""}
        </p>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "var(--spacing-3xl)",
              color: "var(--text-secondary)",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              style={{ margin: "0 auto var(--spacing-lg)", opacity: 0.5 }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
              No courses found
            </h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
