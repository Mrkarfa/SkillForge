import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description?: string;
  instructor: string;
  imageUrl?: string;
  category: string;
  level: string;
  price: number;
  enrolledCount?: number;
}

export default function CourseCard({
  id,
  title,
  instructor,
  imageUrl,
  category,
  level,
  price,
  enrolledCount = 0,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="course-card">
      <div className="course-card-image">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        )}
        <span className="course-card-badge">{level}</span>
      </div>

      <div className="course-card-content">
        <span className="course-card-category">{category}</span>
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-instructor">By {instructor}</p>

        <div className="course-card-meta">
          <span className={`course-card-price ${price === 0 ? "free" : ""}`}>
            {price === 0 ? "Free" : `$${price.toFixed(2)}`}
          </span>
          <div className="course-card-rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{enrolledCount} enrolled</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
