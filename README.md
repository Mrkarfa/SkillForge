<div align="center">

# 🎓 SkillForge LMS

### Transform Your Learning Journey with Expert-Led Courses

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6c47ff?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)](https://expressjs.com/)

[Live Demo](#) • [Documentation](#-documentation) • [Report Bug](#) • [Request Feature](#)

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

</div>

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [The Problem We Solve](#-the-problem-we-solve)
- [Key Benefits](#-key-benefits)
- [Security & Architecture](#-security--architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About The Project

**SkillForge** is a modern, full-stack Learning Management System (LMS) designed to democratize education and make quality learning accessible to everyone. Built with cutting-edge technologies, it provides a seamless experience for both learners and educators.

Whether you're an individual looking to upskill, an educator wanting to share knowledge, or an organization training employees—SkillForge provides the tools you need.

---

## 🔥 The Problem We Solve

### Traditional Learning Challenges

| Problem                    | Our Solution                                     |
| -------------------------- | ------------------------------------------------ |
| **Expensive Education**    | Affordable courses with free enrollment options  |
| **Geographic Limitations** | Learn anywhere, anytime, on any device           |
| **Outdated Content**       | Continuously updated courses by industry experts |
| **Lack of Tracking**       | Built-in progress tracking and certificates      |
| **Complex Administration** | Intuitive admin dashboard for course management  |
| **Security Concerns**      | Enterprise-grade authentication with Clerk       |

### Who Benefits?

- 🎓 **Students** - Access quality education without barriers
- 👨‍🏫 **Instructors** - Create and monetize courses easily
- 🏢 **Organizations** - Train teams with custom learning paths
- 🏫 **Educational Institutions** - Extend reach beyond physical classrooms

---

## ✨ Key Benefits

<table>
<tr>
<td align="center" width="33%">

### 🚀 Performance

Lightning-fast with Next.js 16, React 19, and Turbopack for instant page loads

</td>
<td align="center" width="33%">

### 🔒 Security

Enterprise-grade Clerk authentication with protected routes and secure sessions

</td>
<td align="center" width="33%">

### 📱 Responsive

Fully responsive design that works beautifully on desktop, tablet, and mobile

</td>
</tr>
<tr>
<td align="center" width="33%">

### 📊 Analytics

Track student progress, course completion rates, and engagement metrics

</td>
<td align="center" width="33%">

### 🎨 Modern UI

Beautiful dark theme with gradient accents and smooth animations

</td>
<td align="center" width="33%">

### 🔧 Scalable

Microservices-ready architecture that scales with your needs

</td>
</tr>
</table>

---

## 🛡️ Security & Architecture

### Authentication Layer (Clerk)

```
┌─────────────────────────────────────────────────────────────┐
│                     SECURITY ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐ │
│  │   Frontend   │────▶│    Clerk     │────▶│   Backend    │ │
│  │   Next.js    │     │  Auth Layer  │     │  Express.js  │ │
│  └──────────────┘     └──────────────┘     └──────────────┘ │
│         │                    │                    │          │
│         ▼                    ▼                    ▼          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐ │
│  │  Protected   │     │    JWT +     │     │   MongoDB    │ │
│  │    Routes    │     │   Sessions   │     │  (Encrypted) │ │
│  └──────────────┘     └──────────────┘     └──────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Security Features

| Layer              | Protection                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **Frontend**       | • Clerk middleware for route protection<br>• Environment variable isolation<br>• XSS prevention with React               |
| **Authentication** | • OAuth 2.0 & OpenID Connect<br>• Multi-factor authentication (MFA)<br>• Session management with automatic refresh       |
| **Backend**        | • CORS protection<br>• Input validation & sanitization<br>• MongoDB injection prevention<br>• Clerk webhook verification |
| **Data**           | • Encrypted connections (HTTPS/TLS)<br>• Password hashing (bcrypt)<br>• Secure environment variables                     |

### Backend API Security

```javascript
// Clerk webhook verification for secure user sync
const { Webhook } = require("svix");

// All API routes protected with authentication middleware
app.use("/api/protected/*", verifyClerkToken);

// CORS configured for specific origins
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
```

---

## 🛠️ Tech Stack

### Frontend

| Technology     | Purpose                                     |
| -------------- | ------------------------------------------- |
| **Next.js 16** | React framework with App Router & Turbopack |
| **React 19**   | UI library with latest concurrent features  |
| **TypeScript** | Type safety and better DX                   |
| **Clerk**      | Authentication & user management            |
| **Axios**      | HTTP client for API communication           |

### Backend

| Technology     | Purpose                             |
| -------------- | ----------------------------------- |
| **Express.js** | Fast, minimal web framework         |
| **MongoDB**    | NoSQL database for flexible schemas |
| **Mongoose**   | ODM for MongoDB with validation     |
| **Svix**       | Webhook verification for Clerk      |
| **CORS**       | Cross-origin resource sharing       |

### DevOps & Tools

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| **ESLint** | Code linting and standards      |
| **dotenv** | Environment variable management |
| **npm**    | Package management              |

---

## 🎯 Features

### For Students

- ✅ Browse and search courses by category/level
- ✅ Enroll in free and paid courses
- ✅ Track progress with visual indicators
- ✅ Resume learning from where you left off
- ✅ Access courses on any device
- ✅ Earn completion certificates

### For Instructors (Coming Soon)

- 📝 Create and publish courses
- 📹 Upload video content
- 📊 View analytics and earnings
- 💬 Interact with students

### For Administrators

- 👥 User management
- 📚 Course CRUD operations
- 📈 Platform analytics
- ⚙️ System configuration

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- **MongoDB** (local or Atlas)
- **Clerk Account** (for authentication)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/skillforge-lms.git
   cd skillforge-lms
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../backend
   npm install
   ```

4. **Configure environment variables**

   **Frontend** (`frontend/.env.local`):

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

   **Backend** (`backend/.env`):

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/skillforge
   CLERK_WEBHOOK_SECRET=your_webhook_secret
   ```

5. **Start development servers**

   ```bash
   # Terminal 1 - Frontend
   cd frontend
   npm run dev

   # Terminal 2 - Backend
   cd backend
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
skillforge-lms/
├── 📂 frontend/                 # Next.js Application
│   ├── 📂 app/                  # App Router pages
│   │   ├── 📄 page.tsx          # Homepage
│   │   ├── 📄 layout.tsx        # Root layout + ClerkProvider
│   │   ├── 📂 about/            # About page
│   │   ├── 📂 contact/          # Contact page
│   │   ├── 📂 courses/          # Course listing & details
│   │   ├── 📂 my-courses/       # Student dashboard
│   │   ├── 📂 sign-in/          # Clerk sign-in
│   │   └── 📂 sign-up/          # Clerk sign-up
│   ├── 📂 components/           # Reusable components
│   │   ├── 📄 Navbar.tsx        # Navigation with auth state
│   │   ├── 📄 Hero.tsx          # Homepage hero section
│   │   ├── 📄 CourseCard.tsx    # Course card component
│   │   └── 📄 Footer.tsx        # Site footer
│   ├── 📄 proxy.ts              # Clerk middleware
│   └── 📄 package.json
│
├── 📂 backend/                  # Express.js API
│   ├── 📂 config/
│   │   └── 📄 db.js             # MongoDB connection
│   ├── 📂 models/
│   │   ├── 📄 Course.js         # Course schema
│   │   ├── 📄 User.js           # User schema
│   │   └── 📄 Progress.js       # Progress tracking
│   ├── 📂 routes/
│   │   ├── 📄 courseRoutes.js   # Course endpoints
│   │   ├── 📄 userRoutes.js     # User endpoints
│   │   └── 📄 progressRoutes.js # Progress endpoints
│   ├── 📄 server.js             # Express entry point
│   └── 📄 package.json
│
└── 📄 README.md
```

---

## 📡 API Reference

### Courses

| Method   | Endpoint           | Description       | Auth   |
| -------- | ------------------ | ----------------- | ------ |
| `GET`    | `/api/courses`     | Get all courses   | Public |
| `GET`    | `/api/courses/:id` | Get single course | Public |
| `POST`   | `/api/courses`     | Create course     | Admin  |
| `PUT`    | `/api/courses/:id` | Update course     | Admin  |
| `DELETE` | `/api/courses/:id` | Delete course     | Admin  |

### Users

| Method | Endpoint                          | Description      | Auth    |
| ------ | --------------------------------- | ---------------- | ------- |
| `POST` | `/api/users/webhook`              | Clerk webhook    | Webhook |
| `GET`  | `/api/users/:clerkId`             | Get user profile | Private |
| `POST` | `/api/users/:id/enroll/:courseId` | Enroll in course | Private |

### Progress

| Method | Endpoint                          | Description           | Auth    |
| ------ | --------------------------------- | --------------------- | ------- |
| `GET`  | `/api/progress/:userId/:courseId` | Get course progress   | Private |
| `POST` | `/api/progress/complete`          | Mark chapter complete | Private |
| `GET`  | `/api/progress/:userId`           | Get all progress      | Private |

---

## 🌐 Deployment

### Deploy to Vercel (Frontend)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/skillforge-lms)

### Deploy to Render (Backend)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy!

### Environment Variables for Production

| Variable                            | Where    | Description               |
| ----------------------------------- | -------- | ------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Frontend | Clerk public key          |
| `CLERK_SECRET_KEY`                  | Both     | Clerk secret key          |
| `MONGODB_URI`                       | Backend  | MongoDB connection string |
| `NEXT_PUBLIC_API_URL`               | Frontend | Backend API URL           |

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication Made Simple
- [MongoDB](https://www.mongodb.com/) - Database Platform
- [Vercel](https://vercel.com/) - Deployment Platform

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ by the Mrkarfa

[⬆ Back to Top](#-skillforge-lms)

</div>
