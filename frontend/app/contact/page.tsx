"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-page-header">
          <h1 className="courses-page-title">Contact Us</h1>
          <p className="courses-page-subtitle">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-2xl)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Contact Info */}
          <div>
            <div
              className="course-card"
              style={{
                padding: "var(--spacing-xl)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--spacing-md)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--primary-gradient)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ marginBottom: "var(--spacing-xs)" }}>Email</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    support@skillforge.com
                  </p>
                </div>
              </div>
            </div>

            <div
              className="course-card"
              style={{
                padding: "var(--spacing-xl)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--spacing-md)",
                }}
              >
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
                    flexShrink: 0,
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ marginBottom: "var(--spacing-xs)" }}>
                    Location
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            <div
              className="course-card"
              style={{ padding: "var(--spacing-xl)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--spacing-md)",
                }}
              >
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
                    flexShrink: 0,
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
                <div>
                  <h3 style={{ marginBottom: "var(--spacing-xs)" }}>
                    Response Time
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="course-card" style={{ padding: "var(--spacing-xl)" }}>
            {isSubmitted ? (
              <div
                style={{ textAlign: "center", padding: "var(--spacing-2xl)" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "var(--accent-green)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--spacing-lg)",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ marginBottom: "var(--spacing-sm)" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontSize: "var(--font-xl)",
                    fontWeight: 600,
                    marginBottom: "var(--spacing-lg)",
                  }}
                >
                  Send us a message
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-md)",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "var(--spacing-md)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-primary)",
                      fontSize: "var(--font-base)",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "var(--spacing-md)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-primary)",
                      fontSize: "var(--font-base)",
                    }}
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "var(--spacing-md)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      color: formData.subject
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                      fontSize: "var(--font-base)",
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      padding: "var(--spacing-md)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-primary)",
                      fontSize: "var(--font-base)",
                      resize: "vertical",
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
