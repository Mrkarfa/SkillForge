"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Sample course data (will be replaced with API call)
const courseData = {
  id: "1",
  title: "Complete Web Development Bootcamp 2024",
  description:
    "Become a full-stack web developer with just one course. HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3 and DApps. This comprehensive bootcamp covers everything you need to become a web developer, from the basics to advanced concepts.",
  instructor: "Dr. Angela Yu",
  category: "Development",
  level: "Beginner",
  price: 0,
  enrolledCount: 12500,
  chapters: [
    {
      id: 1,
      title: "Introduction to Web Development",
      duration: "15:30",
      isFree: true,
    },
    { id: 2, title: "HTML Fundamentals", duration: "45:20", isFree: true },
    { id: 3, title: "CSS Styling Basics", duration: "52:10", isFree: false },
    {
      id: 4,
      title: "JavaScript Essentials",
      duration: "1:20:45",
      isFree: false,
    },
    { id: 5, title: "DOM Manipulation", duration: "38:15", isFree: false },
    { id: 6, title: "React Fundamentals", duration: "1:45:30", isFree: false },
    { id: 7, title: "Node.js Backend", duration: "2:10:00", isFree: false },
    {
      id: 8,
      title: "Database Integration",
      duration: "1:30:25",
      isFree: false,
    },
  ],
  learningOutcomes: [
    "Build 16 web development projects for your portfolio",
    "Learn the latest technologies including JavaScript, React, Node and Web3",
    "Master frontend and backend development",
    "Deploy your applications to production",
  ],
};

export default function CourseDetailPage() {
  const params = useParams();
  const { courseId } = params;

  // In production, fetch course data based on courseId
  const course = courseData;

  return (
    <div className="courses-page">
      <div className="container">
        {/* Course Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacing-2xl)",
            marginBottom: "var(--spacing-3xl)",
          }}
        >
          <div>
            <span
              className="course-card-category"
              style={{ marginBottom: "var(--spacing-md)", display: "block" }}
            >
              {course.category} • {course.level}
            </span>
            <h1
              style={{
                fontSize: "var(--font-4xl)",
                fontWeight: 700,
                marginBottom: "var(--spacing-lg)",
              }}
            >
              {course.title}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--font-lg)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              {course.description}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-lg)",
                marginBottom: "var(--spacing-xl)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: "var(--text-secondary)" }}>
                Created by{" "}
                <strong style={{ color: "var(--primary-blue)" }}>
                  {course.instructor}
                </strong>
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                {course.enrolledCount.toLocaleString()} students enrolled
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "var(--spacing-md)",
                flexWrap: "wrap",
              }}
            >
              <Link href="/sign-in" className="btn btn-primary">
                {course.price === 0
                  ? "Enroll for Free"
                  : `Enroll - $${course.price}`}
              </Link>
              <button className="btn btn-secondary">Add to Wishlist</button>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacing-2xl)",
          }}
        >
          {/* Learning Outcomes */}
          <div className="course-card" style={{ padding: "var(--spacing-xl)" }}>
            <h2
              style={{
                fontSize: "var(--font-xl)",
                fontWeight: 600,
                marginBottom: "var(--spacing-lg)",
              }}
            >
              What you&apos;ll learn
            </h2>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--spacing-md)",
                listStyle: "none",
              }}
            >
              {course.learningOutcomes.map((outcome, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--spacing-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-green)"
                    strokeWidth="2"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Curriculum */}
          <div className="course-card" style={{ padding: "var(--spacing-xl)" }}>
            <h2
              style={{
                fontSize: "var(--font-xl)",
                fontWeight: 600,
                marginBottom: "var(--spacing-lg)",
              }}
            >
              Course Curriculum
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              {course.chapters.length} chapters •{" "}
              {course.chapters.filter((c) => c.isFree).length} free previews
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-sm)",
              }}
            >
              {course.chapters.map((chapter, index) => (
                <div
                  key={chapter.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--spacing-md)",
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacing-md)",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: chapter.isFree
                          ? "var(--primary-gradient)"
                          : "rgba(255, 255, 255, 0.05)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "var(--font-sm)",
                        fontWeight: 600,
                      }}
                    >
                      {index + 1}
                    </span>
                    <span>{chapter.title}</span>
                    {chapter.isFree && (
                      <span
                        style={{
                          fontSize: "var(--font-xs)",
                          padding: "2px 8px",
                          background: "rgba(16, 185, 129, 0.2)",
                          color: "var(--accent-green)",
                          borderRadius: "var(--radius-sm)",
                        }}
                      >
                        Free
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacing-md)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "var(--font-sm)",
                      }}
                    >
                      {chapter.duration}
                    </span>
                    {chapter.isFree ? (
                      <Link
                        href={`/course/${courseId}/chapter/${chapter.id}`}
                        className="btn btn-ghost"
                        style={{
                          padding: "var(--spacing-xs) var(--spacing-md)",
                        }}
                      >
                        Preview
                      </Link>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--text-muted)"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
