"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link href="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <svg
                width="20"
                height="20"
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
            <span>SkillForge</span>
          </Link>

          <div className="navbar-links">
            <Link href="/" className="navbar-link">
              Home
            </Link>
            <Link href="/courses" className="navbar-link">
              Courses
            </Link>
            <Link href="/about" className="navbar-link">
              About
            </Link>
            <Link href="/contact" className="navbar-link">
              Contact
            </Link>
          </div>

          <div className="navbar-actions">
            <SignedIn>
              <Link href="/my-courses" className="btn btn-ghost">
                My Courses
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-primary">Sign In</button>
              </SignInButton>
            </SignedOut>

            <button
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          href="/"
          className="mobile-menu-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="mobile-menu-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Courses
        </Link>
        <Link
          href="/about"
          className="mobile-menu-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mobile-menu-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        <SignedIn>
          <Link
            href="/my-courses"
            className="mobile-menu-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Courses
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button
              className="btn btn-primary"
              style={{ marginTop: "1rem", width: "100%" }}
            >
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </>
  );
}
