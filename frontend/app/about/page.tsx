import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-page-header">
          <h1 className="courses-page-title">About SkillForge</h1>
          <p className="courses-page-subtitle">
            Empowering learners worldwide with expert-led education
          </p>
        </div>

        {/* Mission Section */}
        <div
          className="course-card"
          style={{
            padding: "var(--spacing-2xl)",
            marginBottom: "var(--spacing-2xl)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-2xl)",
              fontWeight: 700,
              marginBottom: "var(--spacing-lg)",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--font-lg)",
              lineHeight: 1.8,
              marginBottom: "var(--spacing-lg)",
            }}
          >
            At SkillForge, we believe that education should be accessible to
            everyone, everywhere. Our platform connects passionate learners with
            world-class instructors, offering courses that transform careers and
            change lives.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--font-lg)",
              lineHeight: 1.8,
            }}
          >
            Founded with the vision of democratizing education, we&apos;ve
            helped thousands of students master new skills, land their dream
            jobs, and build successful careers in technology, design, business,
            and beyond.
          </p>
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-2xl)",
          }}
        >
          <div
            className="course-card"
            style={{ padding: "var(--spacing-xl)", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "var(--font-4xl)",
                fontWeight: 700,
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50K+
            </div>
            <p style={{ color: "var(--text-secondary)" }}>Students Enrolled</p>
          </div>
          <div
            className="course-card"
            style={{ padding: "var(--spacing-xl)", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "var(--font-4xl)",
                fontWeight: 700,
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              200+
            </div>
            <p style={{ color: "var(--text-secondary)" }}>Expert Courses</p>
          </div>
          <div
            className="course-card"
            style={{ padding: "var(--spacing-xl)", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "var(--font-4xl)",
                fontWeight: 700,
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50+
            </div>
            <p style={{ color: "var(--text-secondary)" }}>Countries Reached</p>
          </div>
          <div
            className="course-card"
            style={{ padding: "var(--spacing-xl)", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "var(--font-4xl)",
                fontWeight: 700,
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              4.9
            </div>
            <p style={{ color: "var(--text-secondary)" }}>Average Rating</p>
          </div>
        </div>

        {/* Values Section */}
        <div
          className="course-card"
          style={{
            padding: "var(--spacing-2xl)",
            marginBottom: "var(--spacing-2xl)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-2xl)",
              fontWeight: 700,
              marginBottom: "var(--spacing-xl)",
            }}
          >
            Our Values
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--spacing-xl)",
            }}
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "var(--primary-gradient)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
                Quality First
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                We partner only with industry experts to ensure top-tier
                content.
              </p>
            </div>
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
                Community Driven
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Learning is better together. Join thousands of supportive
                learners.
              </p>
            </div>
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
                Lifetime Access
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Enroll once, learn forever. Your courses never expire.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/courses" className="btn btn-primary">
            Start Learning Today
          </Link>
        </div>
      </div>
    </div>
  );
}
