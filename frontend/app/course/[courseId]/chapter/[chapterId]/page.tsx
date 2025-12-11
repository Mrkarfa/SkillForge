"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

interface ChapterLink {
  id: number;
  title: string;
}

interface ChapterData {
  id: number;
  title: string;
  videoUrl: string;
  duration: string;
  description: string;
  courseId: string;
  courseTitle: string;
  nextChapter: ChapterLink | null;
  prevChapter: ChapterLink | null;
}

// Sample chapter data
const chapterData: ChapterData = {
  id: 1,
  title: "Introduction to Web Development",
  videoUrl: "https://example.com/video.mp4",
  duration: "15:30",
  description:
    "Welcome to the Complete Web Development Bootcamp! In this introduction, we'll cover what you'll learn throughout the course and set up your development environment.",
  courseId: "1",
  courseTitle: "Complete Web Development Bootcamp 2024",
  nextChapter: { id: 2, title: "HTML Fundamentals" },
  prevChapter: null,
};

const allChapters = [
  { id: 1, title: "Introduction to Web Development", completed: true },
  { id: 2, title: "HTML Fundamentals", completed: false },
  { id: 3, title: "CSS Styling Basics", completed: false },
  { id: 4, title: "JavaScript Essentials", completed: false },
  { id: 5, title: "DOM Manipulation", completed: false },
  { id: 6, title: "React Fundamentals", completed: false },
  { id: 7, title: "Node.js Backend", completed: false },
  { id: 8, title: "Database Integration", completed: false },
];

export default function ChapterPage() {
  const params = useParams();
  const { courseId, chapterId } = params;

  const chapter = chapterData;
  const currentChapterIndex = allChapters.findIndex(
    (c) => c.id === Number(chapterId)
  );
  const progress = Math.round(
    (allChapters.filter((c) => c.completed).length / allChapters.length) * 100
  );

  return (
    <div
      style={{
        paddingTop: "72px",
        minHeight: "100vh",
        background: "var(--bg-darker)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
        {/* Video Player Area */}
        <div
          style={{
            background: "#000",
            aspectRatio: "16/9",
            maxHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              padding: "var(--spacing-xl)",
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              style={{ margin: "0 auto var(--spacing-lg)", opacity: 0.5 }}
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <h3 style={{ marginBottom: "var(--spacing-sm)" }}>Video Player</h3>
            <p style={{ fontSize: "var(--font-sm)" }}>
              Integrate your video player here (Mux, Vimeo, or custom solution)
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="container" style={{ padding: "var(--spacing-xl)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--spacing-2xl)",
            }}
          >
            {/* Chapter Info */}
            <div>
              <Link
                href={`/courses/${courseId}`}
                style={{
                  color: "var(--primary-blue)",
                  fontSize: "var(--font-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-xs)",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Course
              </Link>

              <h1
                style={{
                  fontSize: "var(--font-2xl)",
                  fontWeight: 700,
                  marginBottom: "var(--spacing-md)",
                }}
              >
                {chapter.title}
              </h1>

              <p
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                {chapter.description}
              </p>

              {/* Navigation Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--spacing-md)",
                  flexWrap: "wrap",
                }}
              >
                {chapter.prevChapter && (
                  <Link
                    href={`/course/${courseId}/chapter/${chapter.prevChapter.id}`}
                    className="btn btn-secondary"
                  >
                    ← Previous
                  </Link>
                )}
                <button
                  className="btn btn-primary"
                  style={{ flex: 1, maxWidth: "200px" }}
                >
                  Mark as Complete
                </button>
                {chapter.nextChapter && (
                  <Link
                    href={`/course/${courseId}/chapter/${chapter.nextChapter.id}`}
                    className="btn btn-secondary"
                  >
                    Next →
                  </Link>
                )}
              </div>
            </div>

            {/* Chapter List Sidebar */}
            <div
              className="course-card"
              style={{ padding: "var(--spacing-lg)" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                <h3 style={{ fontWeight: 600 }}>Course Content</h3>
                <span
                  style={{
                    fontSize: "var(--font-sm)",
                    color: "var(--primary-blue)",
                  }}
                >
                  {progress}% complete
                </span>
              </div>

              <div
                className="progress-bar"
                style={{ marginBottom: "var(--spacing-lg)" }}
              >
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-xs)",
                }}
              >
                {allChapters.map((ch, index) => (
                  <Link
                    key={ch.id}
                    href={`/course/${courseId}/chapter/${ch.id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacing-md)",
                      padding: "var(--spacing-md)",
                      background:
                        ch.id === Number(chapterId)
                          ? "rgba(59, 130, 246, 0.1)"
                          : "transparent",
                      borderRadius: "var(--radius-md)",
                      border:
                        ch.id === Number(chapterId)
                          ? "1px solid var(--primary-blue)"
                          : "1px solid transparent",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "var(--radius-full)",
                        fontSize: "var(--font-xs)",
                        background: ch.completed
                          ? "var(--accent-green)"
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {ch.completed ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--font-sm)",
                        color:
                          ch.id === Number(chapterId)
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {ch.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
