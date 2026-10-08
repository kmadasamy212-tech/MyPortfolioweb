# Madasamy K — Software Developer Portfolio

A personal portfolio web application designed and built for **Madasamy K**, Junior Software Developer and Computer Science Engineering undergraduate at **Anna University, Tamil Nadu** (Expected Graduation: 2027).

Inspired by the design aesthetics and polish of **Apple, Linear, Vercel, and Framer**.

---

## 🚀 Live Sections & Architecture

1. **Sticky Glass Navigation Bar (`Navbar.tsx`)**
   - Brand monogram (`MK`), scrollspy section tracking, smooth scroll, mobile drawer, and verified digital resume viewer trigger.
2. **Hero Section (`Hero.tsx`)**
   - Rotating positioning keywords (*Junior Software Developer*, *Full-Stack Developer*, *Python Developer*, *Web Developer*, *Data Analytics Enthusiast*, *Computer Science Engineer*).
   - Interactive multi-tab developer workspace with live code simulation (`student_model.py`, `api_views.py`, `kpi_report.sql`, `expense_card.dart`).
   - Verified resume tech badges with glassmorphic cards.
3. **About Section (`About.tsx`)**
   - Authentic resume narrative grounded in academic training and internships.
   - 4 Highlight Stat Cards: *2027 Graduation*, *B.E. Computer Science*, *2 Internships*, *Full Stack + Analytics*.
   - Resume skill pills & core engineering competencies.
4. **Skills Section (`Skills.tsx`)**
   - Filterable categories: *Languages*, *Frameworks*, *Web Tech*, *Data & BI*, *Databases*, *Version Control*, *Core CS*.
   - Realistic "Applied In Projects / Internships" indicators (no fake percentages).
5. **Experience Section (`Experience.tsx`)**
   - Vertical timeline featuring verified internships:
     - **Data Analytics Intern @ IBM** (Power BI, IBM Cognos, Dashboards, Data Preprocessing & Trend Analysis).
     - **Full-Stack App Developer Intern @ POSTULATE** (Django REST APIs, Flutter Mobile/Web App, WampServer DB).
6. **Projects Section (`Projects.tsx`)**
   - **Student Performance Prediction Web App**: With a live in-browser ML inference simulator (adjust study hours, attendance, and prior scores to see real-time pass/fail probability gauge).
   - **Expense Tracker**: With a live interactive budget tracking mini-app (add transactions, net balance calculation, categorization, delete items).
7. **Education Section (`Education.tsx`)**
   - B.E. in Computer Science Engineering, Anna University, Tamil Nadu (Expected 2027).
   - Core CS coursework (DSA, DBMS, OOP, Operating Systems, Computer Networks).
8. **What I Can Build (`WhatICanBuild.tsx`)**
   - 6 practical capabilities: Full-Stack Web Apps, Cross-Platform Mobile Apps, BI Dashboards, ML Tools, Relational DBs & SQL, Modern Frontends.
9. **Contact & Connect (`Contact.tsx`)**
   - Direct contact cards (Email: `kmadasamy212@gmail.com`, Phone: `7305348627`, LinkedIn, GitHub).
   - Validated message dispatch form with celebratory confetti.
10. **Verified Digital Resume Modal (`ResumeModal.tsx`)**
    - High-fidelity digital resume view with Print / PDF and Copy Plain Text actions.
11. **Performance Canvas (`ParticleBackground.tsx`)**
    - HTML5 Canvas particle system with mouse parallax, soft ambient aurora glow, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom glassmorphism, glowing borders, and dark palette (`#0B1120`)
- **Icons**: Lucide React + Custom SVG brand marks
- **Interactive Effects**: Canvas Confetti, HTML5 Canvas Particle Network
- **Typography**: Inter (Body & Headings) + Fira Code (Code & Monospace)

---

## 💻 Local Development & Build

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Create optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
