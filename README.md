# Banavathu Yaswanthi Bai — Full Stack Developer Portfolio

A modern, clean, and minimalist personal portfolio website built with **React.js** for the frontend and **Node.js / Express** for the backend, crafted precisely from the resume and profile details of **Banavathu Yaswanthi Bai**.

---

## 🌟 Highlights & Features

- **Clean & Minimalist Aesthetic**: Focused on typography, generous whitespace, smooth transitions, and high readability.
- **Dark & Light Mode**: Instant toggle with system preference persistence in `localStorage`.
- **Full-Stack Contact Engine**: Interactive contact form connected to the Node.js API with real-time feedback, input validation, and local storage (`messages.json`).
- **Verified Resume Data**:
  - **Infosys Springboard 7.0 Virtual Internship** experience details.
  - **ShopStack** (Enterprise Multi-Vendor E-Commerce Platform) with JWT, Spring Boot & Razorpay integration.
  - **VidyaPedia** (College Information Student Portal) with multi-criteria filtering and MySQL.
  - **Education**: B.Tech CSE (3rd Year, VVIT), Diploma in Computer Engineering (Andhra Polytechnic, **8.9 CGPA**), SSC (A.P. Model School, 518/600).
  - **Certifications**: Infosys Springboard (Java Fundamentals, DSA using Java) and CodeChef (Java Problem Solving).
- **Interactive Project Modals**: Click "View Details" on any project to view architectural highlights, tech stack breakdown, and GitHub links.
- **Direct Action Buttons**: One-click email/phone copying, resume printing/saving, and social navigation.
- **Zero Heavy External Icon Bloat**: High-performance, pixel-crisp inline SVGs for instant loading.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite 6, Modern CSS3 (Flexbox/Grid/Variables), Semantic HTML5 |
| **Backend** | Node.js, Express.js, CORS, RESTful API |
| **Data Storage** | JSON-based file persistence for portfolio content and incoming contact messages |

---

## 📁 Project Structure

```
yaswanthi-portfolio/
├── backend/
│   ├── data/
│   │   ├── portfolioData.json   # Full structured portfolio data
│   │   └── messages.json        # Received contact inquiries
│   ├── server.js                # Express REST API & static file server
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── profile.jpg          # Profile photo
│   ├── src/
│   │   ├── assets/              # Profile images & assets
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky glassmorphic navigation & theme toggle
│   │   │   ├── Hero.jsx         # Hero section with avatar, status badge, stats
│   │   │   ├── About.jsx        # Journey, core strengths, languages spoken
│   │   │   ├── Skills.jsx       # Filterable skills tabs & competencies
│   │   │   ├── Experience.jsx   # Infosys Springboard 7.0 timeline
│   │   │   ├── Projects.jsx     # ShopStack & VidyaPedia cards
│   │   │   ├── ProjectModal.jsx # Deep-dive architecture modal
│   │   │   ├── EducationCertifications.jsx # Academic & certificates timeline
│   │   │   ├── Contact.jsx      # Interactive API-connected contact form
│   │   │   ├── Footer.jsx       # Footer with back-to-top button
│   │   │   └── Icons.jsx        # Lightweight SVG icons
│   │   ├── App.jsx              # Main App component with theme provider
│   │   ├── index.css            # Clean modern design system
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## 🚀 How to Run

### Option 1: Unified Server (Recommended)

The backend server serves both the REST API and the compiled React frontend simultaneously on port 5000:

```bash
# 1. Navigate to backend
cd backend

# 2. Start the server
node server.js
```

Open your browser at: **`http://localhost:5000`**

---

### Option 2: Development Mode (Hot Reload)

To work on the frontend with instant hot module replacement:

**Terminal 1 (Backend API):**
```bash
cd backend
node server.js
```

**Terminal 2 (Frontend Dev Server):**
```bash
cd frontend
npm run dev
```

Open your browser at: **`http://localhost:3000`** (requests to `/api` are automatically proxied to port 5000).

---

## 📡 API Endpoints

- `GET /api/health` — Checks API health and uptime.
- `GET /api/portfolio` — Returns full structured profile, skills, projects, and education.
- `POST /api/contact` — Submits a contact inquiry (`{ name, email, subject, message }`).
- `GET /api/messages` — Retrieves all received contact submissions.
