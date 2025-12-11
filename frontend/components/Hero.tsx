import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Top Rated Learning Platform</span>
          </div>

          <h1 className="hero-title">
            Master New Skills with{" "}
            <span className="hero-title-gradient">Expert-Led Courses</span>
          </h1>

          <p className="hero-description">
            Transform your career with our comprehensive online courses. Learn
            from industry experts and join thousands of successful learners
            worldwide.
          </p>

          <div className="hero-actions">
            <Link href="/courses" className="btn btn-primary">
              Get Started
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">50K+</span>
              <span className="hero-stat-label">Students Enrolled</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">200+</span>
              <span className="hero-stat-label">Expert Courses</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">4.9</span>
              <span className="hero-stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
