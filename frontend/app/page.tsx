import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

// Sample courses data (will be replaced with API call)
const featuredCourses = [
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
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Top Courses</h2>
            <Link href="/courses" className="section-link">
              View All Courses
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="course-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: "var(--bg-darker)" }}>
        <div className="container">
          <div
            className="section-header"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <h2 className="section-title">Why Choose SkillForge?</h2>
          </div>

          <div className="course-grid">
            <div
              className="course-card"
              style={{ textAlign: "center", padding: "var(--spacing-2xl)" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto var(--spacing-lg)",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3
                style={{
                  marginBottom: "var(--spacing-sm)",
                  fontSize: "var(--font-xl)",
                }}
              >
                Expert Instructors
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Learn from industry professionals with real-world experience
              </p>
            </div>

            <div
              className="course-card"
              style={{ textAlign: "center", padding: "var(--spacing-2xl)" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto var(--spacing-lg)",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3
                style={{
                  marginBottom: "var(--spacing-sm)",
                  fontSize: "var(--font-xl)",
                }}
              >
                Learn at Your Pace
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Access courses anytime, anywhere, on any device
              </p>
            </div>

            <div
              className="course-card"
              style={{ textAlign: "center", padding: "var(--spacing-2xl)" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto var(--spacing-lg)",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3
                style={{
                  marginBottom: "var(--spacing-sm)",
                  fontSize: "var(--font-xl)",
                }}
              >
                Certificate of Completion
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Earn recognized certificates to showcase your skills
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
