import Link from "next/link";

// Sample enrolled courses data
const enrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    progress: 45,
    chaptersCompleted: 4,
    totalChapters: 8,
    lastAccessed: "2 hours ago",
  },
  {
    id: "4",
    title: "React - The Complete Guide 2024",
    instructor: "Maximilian Schwarzmüller",
    progress: 72,
    chaptersCompleted: 8,
    totalChapters: 11,
    lastAccessed: "Yesterday",
  },
];

export default function MyCoursesPage() {
  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-page-header">
          <h1 className="courses-page-title">My Courses</h1>
          <p className="courses-page-subtitle">
            Continue your learning journey
          </p>
        </div>

        {enrolledCourses.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
            }}
          >
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}/chapter/1`}
                className="course-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  padding: "var(--spacing-lg)",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "var(--font-lg)",
                      fontWeight: 600,
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "var(--spacing-md)",
                    }}
                  >
                    By {course.instructor}
                  </p>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: "var(--spacing-sm)" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "var(--spacing-xs)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "var(--font-sm)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {course.chaptersCompleted} of {course.totalChapters}{" "}
                        chapters
                      </span>
                      <span
                        style={{
                          fontSize: "var(--font-sm)",
                          color: "var(--primary-blue)",
                        }}
                      >
                        {course.progress}% complete
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "var(--font-sm)",
                        color: "var(--text-muted)",
                      }}
                    >
                      Last accessed: {course.lastAccessed}
                    </span>
                    <span
                      className="btn btn-primary"
                      style={{ padding: "var(--spacing-sm) var(--spacing-lg)" }}
                    >
                      Continue Learning →
                    </span>
                  </div>
                </div>
              </Link>
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
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
              No courses yet
            </h3>
            <p style={{ marginBottom: "var(--spacing-lg)" }}>
              Start your learning journey by enrolling in a course
            </p>
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
